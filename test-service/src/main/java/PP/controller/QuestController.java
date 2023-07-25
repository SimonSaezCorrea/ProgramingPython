package PP.controller;

import PP.entity.QuestEntity;
import PP.service.QuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/quest")
public class QuestController {

    @Autowired
    private QuestService questService;

    @GetMapping()
    public ResponseEntity<List<QuestEntity>> getAll() {
        List<QuestEntity> questEntities = questService.getAll();
        return ResponseEntity.ok(questEntities);
    }

    @PostMapping()
    public ResponseEntity<QuestEntity> create(@RequestBody QuestEntity questEntity){
        questService.create(questEntity);
        return ResponseEntity.ok(questEntity);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestEntity> getById(@PathVariable("id") Integer id) {
        QuestEntity questEntity = questService.getById(id);
        return ResponseEntity.ok(questEntity);
    }

    @PostMapping("/{id}")
    public ResponseEntity<QuestEntity> update(@RequestBody QuestEntity questEntity, @PathVariable("id") Integer id){
        questService.update(questEntity, id);
        return ResponseEntity.ok(questEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<QuestEntity> delete(@PathVariable("id") Integer id){
        QuestEntity questEntity = questService.delete(id);
        return ResponseEntity.ok(questEntity);
    }

    @GetMapping("/images/{imageName:.+}")
    public ResponseEntity<InputStreamResource> getImage(@PathVariable String imageName) throws IOException {
        // Lee la imagen desde la carpeta "uploads" en el directorio de recursos
        ClassPathResource imgFile = new ClassPathResource("uploads/" + imageName);

        // Si la imagen existe, devuélvela en la respuesta
        if (imgFile.exists()) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);

            return new ResponseEntity<>(new InputStreamResource(imgFile.getInputStream()), headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

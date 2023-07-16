package PP.controller;

import PP.entity.QuestEntity;
import PP.service.QuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}

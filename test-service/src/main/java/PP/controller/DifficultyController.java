package PP.controller;

import PP.entity.DifficultyEntity;
import PP.service.DifficultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/difficulty")
public class DifficultyController {

    @Autowired
    private DifficultyService difficultyService;

    @GetMapping()
    public ResponseEntity<List<DifficultyEntity>> getAll() {
        List<DifficultyEntity> difficultyEntities = difficultyService.getAll();
        return ResponseEntity.ok(difficultyEntities);
    }

    @PostMapping()
    public ResponseEntity<DifficultyEntity> create(@RequestBody DifficultyEntity difficultyEntity){
        difficultyService.create(difficultyEntity);
        return ResponseEntity.ok(difficultyEntity);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DifficultyEntity> getById(@PathVariable("id") Integer id) {
        DifficultyEntity difficultyEntity = difficultyService.getById(id);
        return ResponseEntity.ok(difficultyEntity);
    }

    @PostMapping("/{id}")
    public ResponseEntity<DifficultyEntity> update(@RequestBody DifficultyEntity difficultyEntity, @PathVariable("id") Integer id){
        difficultyService.update(difficultyEntity, id);
        return ResponseEntity.ok(difficultyEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DifficultyEntity> delete(@PathVariable("id") Integer id){
        DifficultyEntity difficultyEntity = difficultyService.delete(id);
        return ResponseEntity.ok(difficultyEntity);
    }
}

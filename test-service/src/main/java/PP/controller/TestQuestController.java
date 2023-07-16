package PP.controller;

import PP.entity.TestQuestEntity;
import PP.service.TestQuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test_quest")
public class TestQuestController {

    @Autowired
    private TestQuestService testQuestService;

    @GetMapping()
    public ResponseEntity<List<TestQuestEntity>> getAll() {
        List<TestQuestEntity> testQuestEntities = testQuestService.getAll();
        return ResponseEntity.ok(testQuestEntities);
    }

    @PostMapping()
    public ResponseEntity<TestQuestEntity> create(@RequestBody TestQuestEntity testQuestEntity){
        testQuestService.create(testQuestEntity);
        return ResponseEntity.ok(testQuestEntity);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestQuestEntity> getById(@PathVariable("id") Integer id) {
        TestQuestEntity testQuestEntity = testQuestService.getById(id);
        return ResponseEntity.ok(testQuestEntity);
    }

    @PostMapping("/{id}")
    public ResponseEntity<TestQuestEntity> update(@RequestBody TestQuestEntity testQuestEntity, @PathVariable("id") Integer id){
        testQuestService.update(testQuestEntity, id);
        return ResponseEntity.ok(testQuestEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TestQuestEntity> delete(@PathVariable("id") Integer id){
        TestQuestEntity testQuestEntity = testQuestService.delete(id);
        return ResponseEntity.ok(testQuestEntity);
    }
}

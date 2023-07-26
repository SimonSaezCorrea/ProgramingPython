package PP.controller;

import PP.entity.QuestEntity;
import PP.entity.TestEntity;
import PP.service.QuestService;
import PP.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private TestService testService;
    @Autowired
    private QuestService questService;

    @GetMapping()
    public ResponseEntity<List<TestEntity>> getAll() {
        List<TestEntity> testEntities = testService.getAll();
        return ResponseEntity.ok(testEntities);
    }

    @PostMapping()
    public ResponseEntity<List<TestEntity>> create(@RequestBody TestEntity testEntity){
        List<TestEntity> testEntities = new ArrayList<>();
        testEntities.add(testEntity);
        testService.create(testEntity);
        return ResponseEntity.ok(testEntities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<TestEntity>> getById(@PathVariable("id") Integer id) {
        List<TestEntity> testEntities = testService.getById(id);
        return ResponseEntity.ok(testEntities);
    }

    @PostMapping("/{id}")
    public ResponseEntity<TestEntity> update(@RequestBody TestEntity testEntity, @PathVariable("id") Integer id){
        testService.update(testEntity, id);
        return ResponseEntity.ok(testEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TestEntity> delete(@PathVariable("id") Integer id){
        TestEntity testEntity = testService.delete(id);
        return ResponseEntity.ok(testEntity);
    }

    @GetMapping("/quest/difficulty/{difficulty}")
    public ResponseEntity<List<QuestEntity>> createTest(@PathVariable("difficulty") Integer difficulty){
        List<QuestEntity> questEntities = questService.getTests(difficulty);
        return ResponseEntity.ok(questEntities);
    }
    @GetMapping("/quest/image/{id}")
    public ResponseEntity<List<QuestEntity>> getImage(@PathVariable Integer id){
        List<QuestEntity> questEntities = questService.getById(id);
        return ResponseEntity.ok(questEntities);
    }
}

package PP.controller;

import PP.entity.QuestEntity;
import PP.entity.TestEntity;
import PP.service.QuestService;
import PP.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
    public ResponseEntity<TestEntity> create(@RequestBody TestEntity testEntity){
        testService.create(testEntity);
        return ResponseEntity.ok(testEntity);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestEntity> getById(@PathVariable("id") Integer id) {
        TestEntity testEntitie = testService.getById(id);
        return ResponseEntity.ok(testEntitie);
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

    @GetMapping("/quest")
    public ResponseEntity<List<QuestEntity>> getQuestsTests(){
        List<QuestEntity> questEntities = questService.getAll();
        Random rnd = new Random();
        List<QuestEntity> questEntitiesFinal = new ArrayList<>();
        int i;
        for(i = 0; i < 4; i++){
            int numRan = rnd.nextInt(questEntities.size());
            questEntitiesFinal.add(questEntities.remove(numRan));
            System.out.println(questEntitiesFinal.get(i).getImage());
        }
        return ResponseEntity.ok(questEntitiesFinal);
    }
}

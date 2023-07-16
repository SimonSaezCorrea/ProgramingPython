package PP.service;

import PP.entity.TestEntity;
import PP.entity.TestQuestEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestQuestService {
    @Autowired
    PP.repository.TestQuestRepository testQuestRepository;

    public TestQuestEntity create(TestQuestEntity testQuestEntity) {
        return testQuestRepository.save(testQuestEntity);
    }
    public List<TestQuestEntity> getAll() {
        return testQuestRepository.findAll();
    }

    public TestQuestEntity getById(Integer id){
        return testQuestRepository.getById(id);
    }

    public TestQuestEntity delete(Integer id){
        TestQuestEntity testQuestEntity = getById(id);
        testQuestRepository.deleteById(id);
        return testQuestEntity;
    }

    public TestQuestEntity update(TestQuestEntity testQuestEntity, Integer id){
        testQuestRepository.deleteById(id);
        return testQuestRepository.save(testQuestEntity);
    }
}

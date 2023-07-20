package PP.service;

import PP.entity.TestEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    @Autowired
    PP.repository.TestRepository testRepository;

    public TestEntity create(TestEntity testEntity) {
        return testRepository.save(testEntity);
    }
    public List<TestEntity> getAll() {
        return testRepository.findAll();
    }

    public TestEntity getById(Integer id){
        return testRepository.getById(id);
    }

    public TestEntity delete(Integer id){
        TestEntity testEntity = getById(id);
        testRepository.deleteById(id);
        return testEntity;
    }

    public TestEntity update(TestEntity testEntity, Integer id){
        testRepository.deleteById(id);
        return testRepository.save(testEntity);
    }

}

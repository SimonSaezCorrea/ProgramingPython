package PP.service;

import PP.entity.QuestEntity;
import PP.entity.TestEntity;
import PP.model.UserEntity;
import PP.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class TestService {
    @Autowired
    TestRepository testRepository;
    @Autowired
    RestTemplate restTemplate;
    @Autowired
    DifficultyService difficultyService;

    public TestEntity create(TestEntity testEntity) {
        UserEntity userEntity = getUserConnect().get(0);
        System.out.println(userEntity);
        if(difficultyService.getById(testEntity.getId_difficulty()).getScore()==1){
            userEntity.setTest_easy(userEntity.getTest_easy()+1);
        }else if(difficultyService.getById(testEntity.getId_difficulty()).getScore()==2){
            userEntity.setTest_medium(userEntity.getTest_medium()+1);
        }else if(difficultyService.getById(testEntity.getId_difficulty()).getScore()==3){
            userEntity.setTest_hard(userEntity.getTest_hard()+1);
        }
        System.out.println(userEntity);
        postUser(userEntity);
        return testRepository.save(testEntity);
    }
    public List<TestEntity> getAll() {
        return testRepository.findAll();
    }

    public List<TestEntity> getById(Integer id){
        return testRepository.getByIdModify(id);
    }

    public TestEntity delete(Integer id){
        TestEntity testEntity = getById(id).get(0);
        testRepository.deleteById(id);
        return testEntity;
    }

    public TestEntity update(TestEntity testEntity, Integer id){
        testRepository.deleteById(id);
        return testRepository.save(testEntity);
    }

    public List<UserEntity> getUserConnect(){

        ResponseEntity<List<UserEntity>> response = restTemplate.exchange(
                "http://user-service/user/connect",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<UserEntity>>() {}
        );
        return response.getBody();
    }
    public void postUser(UserEntity userEntity){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<UserEntity> requestEntity = new HttpEntity<>(userEntity, headers);

        restTemplate.exchange(
                "http://user-service:8080/user",
                HttpMethod.POST,
                requestEntity,
                UserEntity.class
        );
    }
}

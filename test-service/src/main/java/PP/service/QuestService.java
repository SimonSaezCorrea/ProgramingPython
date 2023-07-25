package PP.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import PP.entity.QuestEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class QuestService {
    @Autowired
    PP.repository.QuestRepository questRepository;

    public QuestEntity create(QuestEntity questEntity) {
        return questRepository.save(questEntity);
    }
    public List<QuestEntity> getAll() {
        return questRepository.findAll();
    }

    public QuestEntity getById(Integer id){
        return questRepository.getById(id);
    }

    public QuestEntity delete(Integer id){
        QuestEntity questEntity = getById(id);
        questRepository.deleteById(id);
        return questEntity;
    }

    public QuestEntity update(QuestEntity questEntity, Integer id){
        questRepository.deleteById(id);
        return questRepository.save(questEntity);
    }

    public List<QuestEntity> getTests(){
        List<QuestEntity> questEntities = getAll();
        Random rnd = new Random();
        List<QuestEntity> questEntitiesFinal = new ArrayList<>();
        int i;
        for(i = 0; i < 4; i++){
            int numRan = rnd.nextInt(questEntities.size());
            questEntitiesFinal.add(questEntities.remove(numRan));
            System.out.println(questEntitiesFinal.get(i).getImage());
        }
        return questEntitiesFinal;
    }
}

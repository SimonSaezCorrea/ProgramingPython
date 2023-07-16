package PP.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import PP.entity.DifficultyEntity;

import java.util.List;

@Service
public class DifficultyService {
    @Autowired
    PP.repository.DifficultyRepository difficultyRepository;

    public DifficultyEntity create(DifficultyEntity difficultyEntity) {
        return difficultyRepository.save(difficultyEntity);
    }
    public List<DifficultyEntity> getAll() {
        return difficultyRepository.findAll();
    }

    public DifficultyEntity getById(Integer id){
        return difficultyRepository.getById(id);
    }

    public DifficultyEntity delete(Integer id){
        DifficultyEntity difficultyEntity = getById(id);
        difficultyRepository.deleteById(id);
        return difficultyEntity;
    }

    public DifficultyEntity update(DifficultyEntity difficultyEntity, Integer id){
        difficultyRepository.deleteById(id);
        return difficultyRepository.save(difficultyEntity);
    }
}

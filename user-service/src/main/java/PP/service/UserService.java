package PP.service;

import PP.entity.UserEntity;
import PP.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public UserEntity create(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }
    public List<UserEntity> getAll() {
        return userRepository.findAll();
    }

    public UserEntity getById(Integer id){
        return userRepository.getById(id);
    }

    public UserEntity delete(Integer id){
        UserEntity userEntity = getById(id);
        userRepository.deleteById(id);
        return userEntity;
    }

    public UserEntity update(UserEntity userEntity, Integer id){
        userRepository.deleteById(id);
        return userRepository.save(userEntity);
    }
}

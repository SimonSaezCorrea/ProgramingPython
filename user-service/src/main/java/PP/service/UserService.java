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

    public List<UserEntity> getConnect(){
        return userRepository.getConnect();
    }

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

    public void connect(UserEntity user){
        UserEntity newUser = user;
        newUser.setConnect(1);
        update(newUser, user.getId());
    }

    public boolean logout(){
       UserEntity userEntity = getConnect().get(0);
       UserEntity newUserEntity = userEntity;
       newUserEntity.setConnect(0);
       update(newUserEntity, userEntity.getId());
       return true;
    }

    public UserEntity getByName(String user){
        return userRepository.getByName(user).get(0);
    }
}

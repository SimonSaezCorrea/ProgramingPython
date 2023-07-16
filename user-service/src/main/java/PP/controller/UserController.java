package PP.controller;

import PP.entity.UserEntity;
import PP.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public ResponseEntity<List<UserEntity>> getAll() {
        List<UserEntity> userEntities = userService.getAll();
        return ResponseEntity.ok(userEntities);
    }

    @PostMapping()
    public ResponseEntity<UserEntity> create(@RequestBody UserEntity userEntity){
        userService.create(userEntity);
        return ResponseEntity.ok(userEntity);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getById(@PathVariable("id") Integer id) {
        UserEntity userEntities = userService.getById(id);
        return ResponseEntity.ok(userEntities);
    }

    @PostMapping("/{id}")
    public ResponseEntity<UserEntity> update(@RequestBody UserEntity userEntity, @PathVariable("id") Integer id){
        userService.update(userEntity, id);
        return ResponseEntity.ok(userEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserEntity> delete(@PathVariable("id") Integer id){
        UserEntity userEntity = userService.delete(id);
        return ResponseEntity.ok(userEntity);
    }
}

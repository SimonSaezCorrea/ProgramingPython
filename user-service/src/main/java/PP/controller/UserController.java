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

    @GetMapping("/connect")
    public ResponseEntity<List<UserEntity>> getConnect() {
        List<UserEntity> userEntitie = userService.getConnect();
        return ResponseEntity.ok(userEntitie);
    }
    @GetMapping("/connect/{user}/{pass}")
    public ResponseEntity<Boolean> connect(@PathVariable("user") String user, @PathVariable("pass") String pass){
        UserEntity userEntity = userService.getByName(user);
        if(userEntity==null){
            System.out.println("No existe usuario");
            return ResponseEntity.ok(false);
        }

        if(!userEntity.getPassword().equals(pass)){
            System.out.println("Contraseña incorrecta");
            return ResponseEntity.ok(false);
        }
        System.out.println("Ingreso");
        userService.connect(userEntity);
        return ResponseEntity.ok(true);
    }

    @GetMapping("/logout")
    public ResponseEntity<Boolean> logout() {
        return ResponseEntity.ok(userService.logout());
    }
}

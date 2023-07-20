package PP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "userpp")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String password;
    private String correo;
    private int connect;
    private int test_easy;
    private int test_medium;
    private int test_hard;

    public UserEntity(String name, String password, String correo, int connect, int test_easy, int test_medium, int test_hard) {
        this.name = name;
        this.password = password;
        this.correo = correo;
        this.connect = connect;
        this.test_easy = test_easy;
        this.test_medium = test_medium;
        this.test_hard = test_hard;
    }
}

package PP.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    private Integer id;
    private String name;
    private String password;
    private String correo;
    private int connect;
    private int test_easy;
    private int test_medium;
    private int test_hard;
}

package PP.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Test")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer id_difficulty;
    private Integer id_user;
    private String time;

    public TestEntity(String title, Integer id_difficulty, Integer id_user, String time) {
        this.title = title;
        this.id_difficulty = id_difficulty;
        this.id_user = id_user;
        this.time = time;
    }
}

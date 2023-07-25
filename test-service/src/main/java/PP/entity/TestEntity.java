package PP.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "test")
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
    private Integer id_quest1;
    private Integer id_quest2;
    private Integer id_quest3;
    private Integer id_quest4;
    private Integer qualification;

    public TestEntity(String title, Integer id_difficulty, Integer id_user, String time, Integer id_quest1, Integer id_quest2, Integer id_quest3, Integer id_quest4) {
        this.title = title;
        this.id_difficulty = id_difficulty;
        this.id_user = id_user;
        this.time = time;
        this.id_quest1 = id_quest1;
        this.id_quest2 = id_quest2;
        this.id_quest3 = id_quest3;
        this.id_quest4 = id_quest4;
    }
}

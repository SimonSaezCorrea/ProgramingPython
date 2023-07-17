package PP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "test_quest")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TestQuestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer id_test;
    private Integer id_quest;
    private Integer qualification;
}

package PP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "quest")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class QuestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    @Column(length = 10000)
    private String content;
    private String image;
    private Integer id_difficulty;
    private Integer id_user;
    @Column(length = 100)
    private String answer;

    public QuestEntity(String title, String content, String image, Integer id_difficulty, Integer id_user, String answer) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.id_difficulty = id_difficulty;
        this.id_user = id_user;
        this.answer = answer;
    }
}

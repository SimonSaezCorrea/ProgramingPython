package PP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Quest")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class QuestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer content;
    private Integer image;
    private String id_difficulty;
    private String id_user;

    public QuestEntity(String title, Integer content, Integer image, String id_difficulty, String id_user) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.id_difficulty = id_difficulty;
        this.id_user = id_user;
    }
}

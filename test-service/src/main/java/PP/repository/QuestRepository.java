package PP.repository;

import PP.entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import PP.entity.QuestEntity;

import java.util.List;

@Repository
public interface QuestRepository extends JpaRepository<QuestEntity, Integer> {
    @Query("SELECT e FROM QuestEntity e WHERE e.id_difficulty = :id_difficulty")
    List<QuestEntity> getAllDifficulty(@Param("id_difficulty") Integer id_difficulty);

    @Query("SELECT e FROM QuestEntity e WHERE e.id = :id")
    List<QuestEntity> getByIdModify(@Param("id") Integer id);
}
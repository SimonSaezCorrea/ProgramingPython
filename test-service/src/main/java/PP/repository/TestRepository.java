package PP.repository;

import PP.entity.QuestEntity;
import PP.entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<TestEntity, Integer> {
    @Query("SELECT e FROM TestEntity e WHERE e.id = :id")
    List<TestEntity> getByIdModify(@Param("id") Integer id);
}
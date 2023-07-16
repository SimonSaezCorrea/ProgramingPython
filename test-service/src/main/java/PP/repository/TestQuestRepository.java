package PP.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import PP.entity.TestQuestEntity;

@Repository
public interface TestQuestRepository extends JpaRepository<TestQuestEntity, Integer> {
}
package PP.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import PP.entity.QuestEntity;

@Repository
public interface QuestRepository extends JpaRepository<QuestEntity, Integer> {
}
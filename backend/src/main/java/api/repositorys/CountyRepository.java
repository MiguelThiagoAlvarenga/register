package api.repositorys;

import api.models.County;
import api.models.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountyRepository extends JpaRepository<County, Long> {
    List<County> findAll();
    County findById(long id);
    List<County> findAllByState_IdOrderByName(long idState);
    County findByName(String name);
}

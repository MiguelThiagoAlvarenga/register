package com.register.repositorys;

import com.register.models.County;
import com.register.models.State;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountyRepository extends JpaRepository<County, Long> {
    List<County> findAll();
    County findById(long id);
    County findByState(State state);
    County findByName(String name);
}

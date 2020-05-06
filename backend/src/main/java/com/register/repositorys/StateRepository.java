package com.register.repositorys;

import com.register.models.State;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StateRepository extends JpaRepository<State, Long> {
    List<State> findAll();
    State findById(long id);
    State findByInitials(String initials);
}

package com.register.repositorys;

import com.register.models.Address;
import com.register.models.County;
import com.register.models.Person;
import com.register.models.State;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findAll();
    Person findById(long id);
    Person findByCpf(String cpf);
    Person findByAddress(Address address);
    Person findByAddress_County(County county);
    Person findByAddress_County_State(State state);
    Person findByBirthDate(Date birtDate);
}

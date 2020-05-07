package api.repositorys;

import api.models.Address;
import api.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findAll();
    Person save(Person person);
    Person findById(long id);
    List<Person> findByName(String name);
    Person findByCpf(String cpf);
    List<Person> findByAddress(Address address);
    List<Person> findByAddress_County_Id(long idCounty);
    List<Person> findByAddress_County_State_Id(long idState);
    List<Person> findAllByBirthDate(Date birthDate);
}

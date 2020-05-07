package api.services;

import api.models.Person;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface PersonService {
    Person add(Person novaProposta);
    Person getByCpf(String cpf);
    Person getById(long id);
    void delete(long id);
    List<Person> getAll();
    List<Person> getByName(String name);
    List<Person> getByBirthDate(String birthDate) throws ParseException;
    List<Person> getByState(long idState);
    List<Person> getByCounty(long idCounty);
}

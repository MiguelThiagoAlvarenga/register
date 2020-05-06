package api.services;

import api.models.Person;

import java.util.List;

public interface PersonService {
    Person add(Person novaProposta);
    Person getByCpf(String cpf);
    Person getById(long id);
    List<Person> getAll();
}

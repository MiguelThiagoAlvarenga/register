package com.register.services;

import com.register.models.Person;

import java.util.List;

public interface PersonService {
    Person add(Person novaProposta);
    Person getByCpf(String cpf);
    List<Person> getAll();
}

package com.register.services.imps;

import com.register.models.Person;
import com.register.repositorys.PersonRepository;
import com.register.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class PersonServiceImp implements PersonService {

    @Autowired
    PersonRepository personRepository;

    @Override
    public Person getByCpf(String cpf) {
        return personRepository.findByCpf(cpf);
    }

    @Override
    public List<Person> getAll() {
        return personRepository.findAll();
    }

    @Override
    public Person add(Person novaPerson) {

        //validar se  >= 18 anos front e backend
        //validar CPF ---> FrontEnd e backend
        //Ao menos um contato cadastrado -> Front e backend
        //Validar email front e backend.

        return personRepository.save(novaPerson);
    }
}

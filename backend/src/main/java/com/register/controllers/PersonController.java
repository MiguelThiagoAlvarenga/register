package com.register.controllers;

import com.register.models.Person;
import com.register.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    PersonService personService;

    @PostMapping("/add")
    public @ResponseBody
    Person ativarBarragem(@RequestBody Person person) {
        return personService.add(person);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getAll")
    public @ResponseBody
    List<Person> getAll() {
        return personService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByCpf/{cpf}")
    public @ResponseBody
    Person getByCpf(@PathVariable("cpf") String cpf) throws InterruptedException {
        Person person = personService.getByCpf(cpf);

        return person;
    }


}

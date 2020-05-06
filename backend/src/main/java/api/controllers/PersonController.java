package api.controllers;

import api.models.Person;
import api.services.PersonService;
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
    public List<Person> getAll() {
        return personService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByCpf/{cpf}")
    public @ResponseBody Person getByCpf(@PathVariable("cpf") String cpf) throws InterruptedException {
        return personService.getByCpf(cpf);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getById/{id}")
    public Person getByCpf(@PathVariable("id") long id) throws InterruptedException {
        return personService.getById(id);
    }


}

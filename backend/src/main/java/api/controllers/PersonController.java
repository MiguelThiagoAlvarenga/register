package api.controllers;

import api.models.Person;
import api.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    PersonService personService;

    @PostMapping("/add")
    public @ResponseBody Person add(@RequestBody Person person) {
        return personService.add(person);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id")  long id) {
      personService.delete(id);
      return "Ok";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getAll")
    public List<Person> getAll() {
        return personService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getById/{id}")
    public Person getByCpf(@PathVariable("id") long id) throws InterruptedException {
        return personService.getById(id);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByName/{name}")
    public List<Person> getByName(@PathVariable("name") String name) {
        return personService.getByName(name);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByCpf/{cpf}")
    public @ResponseBody Person getByCpf(@PathVariable("cpf") String cpf) throws InterruptedException {
        return personService.getByCpf(cpf);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByBirthDate/{birthDate}")
    public List<Person> getByBirthDate(@PathVariable("birthDate") String birthDate) throws InterruptedException, ParseException {
        return personService.getByBirthDate(birthDate);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByState/{idState}")
    public List<Person> getByState(@PathVariable("idState") long idState) throws InterruptedException {
        return personService.getByState(idState);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByCounty/{idCounty}")
    public List<Person> getByCounty(@PathVariable("idCounty") long idCounty) throws InterruptedException {
        return personService.getByCounty(idCounty);
    }


}

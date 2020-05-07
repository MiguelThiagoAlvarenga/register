package api.services.imps;

import api.models.Address;
import api.models.Contact;
import api.models.Person;
import api.repositorys.AddressRepository;
import api.repositorys.ContactRepository;
import api.repositorys.PersonRepository;
import api.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Transactional
@Service
public class PersonServiceImp implements PersonService {

    @Autowired
    PersonRepository personRepository;
    @Autowired
    ContactRepository contactRepository;
    @Autowired
    AddressRepository addressRepository;

    @Override
    public Person getByCpf(String cpf) { return personRepository.findByCpf(cpf); }

    @Override
    public Person getById(long id) { return personRepository.findById(id); }

    @Override
    public void delete(long id) { personRepository.deleteById(id); }

    @Override
    public List<Person> getAll() { return personRepository.findAll(); }

    @Override
    public List<Person> getByName(String name) { return personRepository.findByName(name); }

    @Override
    public List<Person> getByBirthDate(String birthDate) throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = formatter.parse(birthDate);
        return personRepository.findAllByBirthDate(date);
    }

    @Override
    public List<Person> getByState(long idState) { return personRepository.findByAddress_County_State_Id(idState); }

    @Override
    public List<Person> getByCounty(long idCounty) { return personRepository.findByAddress_County_Id(idCounty); }

    @Override
    public Person add(Person newPerson) {
        Address newAddress = newPerson.getAddress();
        Contact newContact = newPerson.getContact();

        newPerson.setAddress(addressRepository.save(newAddress));
        newPerson.setContact(contactRepository.save(newContact));
        return personRepository.save(newPerson);
    }


}

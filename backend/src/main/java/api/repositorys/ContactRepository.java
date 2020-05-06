package api.repositorys;

import api.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    List<Contact> findAll();
    Contact findById(long id);
    Contact save(Contact contact);
}

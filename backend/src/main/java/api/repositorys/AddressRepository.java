package api.repositorys;

import api.models.Address;
import api.models.Contact;
import api.models.County;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
    Address findById(long id);
    Address findByCounty(County county);
    Address save(Address address);
}

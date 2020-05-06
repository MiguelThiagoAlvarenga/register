package com.register.repositorys;

import com.register.models.Address;
import com.register.models.County;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
    Address findById(long id);
    Address findByCounty(County county);
}

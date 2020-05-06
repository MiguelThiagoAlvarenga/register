package com.register.services.imps;

import com.register.models.County;
import com.register.models.State;
import com.register.repositorys.CountyRepository;
import com.register.services.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class CountyServiceImp implements CountyService {

    @Autowired
    CountyRepository countyRepository;

    @Override
    public County getByName(String name) {
        return countyRepository.findByName(name);
    }

    @Override
    public County getById(long id) {
        return countyRepository.findById(id);
    }

    @Override
    public List<County> getAll() {
        return countyRepository.findAll();
    }

    @Override
    public List<County> getByState(State state) {
        return (List<County>) countyRepository.findByState(state);
    }
}

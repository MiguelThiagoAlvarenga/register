package com.register.services.imps;

import com.register.models.State;
import com.register.repositorys.StateRepository;
import com.register.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class StateServiceImp implements StateService {

    @Autowired
    StateRepository stateRepository;

    @Override
    public State getByInitials(String initials) {
        return stateRepository.findByInitials(initials);
    }

    @Override
    public List<State> getAll() {
        return stateRepository.findAll();
    }


}

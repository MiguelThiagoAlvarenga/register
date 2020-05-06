package com.register.controllers;

import com.register.models.State;
import com.register.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/state")
public class StateController {
    @Autowired
    StateService stateService;

    @RequestMapping(method = RequestMethod.GET, value = "/getAll")
    List<State> GetAll () {
        return stateService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getByInitials/{initials}")
    State GetByInitials (@PathVariable("initials") String initials) {
        return stateService.getByInitials(initials);
    }
}

package api.controllers;

import api.models.State;
import api.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
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
    @ResponseBody
    State GetByInitials (@PathVariable("initials") String initials) {
        return stateService.getByInitials(initials);
    }
}

package com.register.controllers;

import com.register.models.County;
import com.register.models.State;
import com.register.services.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/county")
public class CountyController {
    @Autowired
    CountyService countyService;

    @RequestMapping(method = RequestMethod.GET, value = "/getByName/{name}")
    public @ResponseBody
    County GetByName(@PathVariable("name") String name){
        return countyService.getByName(name);
    };

    @RequestMapping(method = RequestMethod.GET, value = "/getById/{id}")
    public @ResponseBody
    County GetById(@PathVariable("id") long id){
        return countyService.getById(id);
    };

    @RequestMapping(method = RequestMethod.GET, value = "/getByState/{state}")
    public @ResponseBody
    List<County> GetByState(@PathVariable("State") State state){
        return countyService.getByState(state);
    };

    @RequestMapping(method = RequestMethod.GET, value = "/getAll")
    public @ResponseBody
    List<County> GetAll() {
        return countyService.getAll();
    };
}

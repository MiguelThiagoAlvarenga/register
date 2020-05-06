package com.register.services;

import com.register.models.County;
import com.register.models.State;

import java.util.List;

public interface CountyService {
    County getByName(String name);
    County getById(long id);
    List<County> getAll();
    List<County> getByState(State state);
}

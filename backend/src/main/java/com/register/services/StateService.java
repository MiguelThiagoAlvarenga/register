package com.register.services;

import com.register.models.State;

import java.util.List;

public interface StateService {
    State getByInitials(String initials);
    List<State> getAll();
}

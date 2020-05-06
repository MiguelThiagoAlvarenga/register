package api.services;

import api.models.State;

import java.util.List;

public interface StateService {
    State getByInitials(String initials);
    List<State> getAll();
}

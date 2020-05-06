package api.services;

import api.models.County;

import java.util.List;

public interface CountyService {
    County getByName(String name);
    County getById(long id);
    List<County> getAll();
    List<County> getByState(long idState);
}

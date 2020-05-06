package api.services.imps;

import api.models.County;
import api.models.State;
import api.repositorys.CountyRepository;
import api.services.CountyService;
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
    public County getByName(String name)
    {
        return countyRepository.findByName(name);
    }

    @Override
    public County getById(long id)
    {
        return countyRepository.findById(id);
    }

    @Override
    public List<County> getAll()
    {
        return countyRepository.findAll();
    }

    @Override
    public List<County> getByState(long idState) {
        return (List<County>) countyRepository.findAllByState_IdOrderByName(idState);
    }
}

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PersonService} from '../../services/person.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';
import {FilterComponent} from './filter/filter.component';
import {CadRegisterComponent} from './register-modal/register-modal.component';
import {PersonModel} from '../../models/person.model';
import {AddressModel} from '../../models/address.model';
import {ContactModel} from '../../models/contact.model';
import {StateModel} from '../../models/state.model';
import {StateService} from '../../services/state.service';
import { ActivatedRoute, Router } from '@angular/router';

const viewChild = ViewChild(FilterComponent, null);

@Component({
  selector: 'app-layout-register',
  templateUrl: './layout-register.component.html',
  styleUrls: ['./layout-register.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})


export class LayoutRegisterComponent implements OnInit {

  @viewChild pesquisaRetorno: PersonModel;

  private registerComponent :CadRegisterComponent;

  personList: PersonModel[];
  person: PersonModel;
  contact: ContactModel;
  address: AddressModel;
  listState: StateModel[];

  constructor(
      private personService: PersonService,
      private stateService: StateService,
      private modalService: NgbModal,
      private router: Router,
  ) { }

  ngOnInit() {
    this.getList()
  }


  reciverFeedback(filter) {
    if (filter && filter.type) {
      this.clean();
      this.personList = [];
      if (!filter.value) {
        this.updateList();
      } else if(filter.type === 'cpf') {
        this.personService.getByCpf(filter.value).subscribe( (person: PersonModel) => {
          this.personList.push(person)
        });
      } else if(filter.type === 'state'){
        this.personService.getByState(filter.value).subscribe((personList: PersonModel[]) => {
          this.personList = personList
        });
      } else if(filter.type === 'birthDate'){
        this.personService.getByBirthDate(filter.value).subscribe( (personList: PersonModel[]) => {
          this.personList = personList
        });
      } else if(filter.type === 'name'){
        this.personService.getByName(filter.value).subscribe((personList: PersonModel[]) => {
          this.personList = personList
        } );
      } else if(filter.type === 'county'){
        this.personService.getByCounty(filter.value).subscribe( (personList: PersonModel[]) => {
          this.personList = personList
        } );
      }
    } else {
      this.updateList();
    }
  }

  getList(){
    this.stateService.getAll().then( (listState: StateModel[]) => {
      this.listState=listState;
    });

    this.updateList();
  }

  updateList() {
    this.personService.getAll().subscribe( (personList: PersonModel[]) => {
      this.personList = personList
    } );
  }

  clean() {
    this.contact = new ContactModel(null, null, null, null);
    this.address = new AddressModel(null,null, null, null, null);
    this.person = new PersonModel(null, null, null, null, null, null);
  }

  openXl(person: PersonModel) {
    this.registerComponent.openXl(person)
  }

  registerPerson(id){
    this.router.navigateByUrl(!id ? `/register-person` : `/update-person/${id}`);
  }

  deletePerson(id: number) {
    this.personService.delete(id).subscribe(resp => {
      this.updateList();
    });
  }
}

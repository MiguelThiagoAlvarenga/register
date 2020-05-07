import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StateModel} from "../../models/state.model";
import {CountyModel} from "../../models/county.model";
import {CountyService} from "../../services/county.service";
import {PersonService} from "../../services/person.service";
import {ContactModel} from "../../models/contact.model";
import {AddressModel} from "../../models/address.model";
import {PersonModel} from "../../models/person.model";
import {Util} from "../../utils/util";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  locale: any;
  birthDate;

  title: String;

  @Input() person: object;
  @Input() listState: StateModel[];
  @Output() updateList = new EventEmitter<any>();

  isEditing: boolean;
  listCounty: CountyModel[] = [];
  state;
  zipCode: String;
  cpf: String;
  telephone: String;
  email: string;
  skype: string;
  contactIsValid: boolean = false;
  cpfIsValid: boolean = false;
  zipCodeIsValid: boolean = false;
  name: string;
  address: string;
  neighborhood: string;
  county: number;
  private idContact: number = null;
  private idAddress: number = null;
  private idPerson: number = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countyService: CountyService,
    private modalService: NgbModal,
    private personService: PersonService,
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.stateService.getAll().then( (listState: StateModel[]) => {
      this.listState=listState;
    });

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      neighborhood: ['',Validators.required],
      county: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', false],
      skype: ['', false],
      telephone: ['', false],
    });
    await this.activatedRoute.params.subscribe(async params => {
      await this.loadRegister(params);
    } )
  }

  async loadRegister(params){
    this.isEditing = params && (params.id > -1);
    if (this.isEditing) {
      const person = await this.personService.getById(params.id).then((person: PersonModel) => person);
      this.title = `Editando - ${person.name}`
      this.idPerson = person.id;
      this.name = person.name;
      this.cpf = person.cpf;
      this.birthDate = person.birthDate;
      this.idAddress = person.address.id;
      this.address = person.address.address;
      this.neighborhood = person.address.neighborhood;
      this.state = person.address.county.state.id;
      this.county = person.address.county.id;
      this.zipCode = person.address.zipCode;
      this.idContact = person.contact.id;
      this.email = person.contact.email;
      this.skype = person.contact.skype;
      this.telephone = person.contact.telephone;

    } else {
      this.title = `Cadastro`;
    }
  }

  comeBack() {
    this.router.navigateByUrl(`/person`);
  }

  save(){
    const contact = new ContactModel(
      this.idContact,
      this.registerForm.value.email,
      this.registerForm.value.skype,
      this.registerForm.value.telephone

    )
    const address = new AddressModel(
      this.idAddress,
      this.registerForm.value.address,
      this.registerForm.value.neighborhood,
      this.registerForm.value.zipCode,
      new CountyModel(this.registerForm.value.county)
    )
    const person = new PersonModel(
      this.idPerson,
      this.birthDate,
      this.registerForm.value.cpf,
      this.registerForm.value.name,
      address,
      contact
    )

    this.personService.save(person).subscribe((person:PersonModel) => {
        this.updateList.emit();
        this.onReset();
      },
      error => {
        Error('Erro ao enviar a Register');
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid || !this.contactIsValid || !this.cpfIsValid || !this.zipCodeIsValid) {
      return;
    }

    this.save();

  }

  onReset() {
    this.cpf = null;
    this.zipCode = null;
    this.email = null;
    this.skype = null;
    this.telephone = null;
    this.submitted = false;
    this.registerForm.reset();
    this.comeBack()
  }

  onChangeState(idState) {
    if (idState) {
      this.countyService.getByState(idState).then((listCounty: CountyModel[]) => {
        this.listCounty = listCounty;
      });
    }
  }

  OnChangeCpf(cpf) {
    if (cpf) {
      const eCpf = document.getElementById("CPF");
      eCpf['value'] = Util.cpfMask(cpf);
      this.registerForm.value.cpf = Util.cpfMask(cpf);
      this.cpf = Util.cpfMask(cpf)

      this.cpfIsValid = Util.checkCPF(cpf);
    }
  }

  OnChangeZipCode(zipCode) {
    if (zipCode) {
      const eZipCode = document.getElementById("zipCode");
      eZipCode['value'] = Util.zipCodeMask(zipCode);
      this.registerForm.value.zipCode = Util.zipCodeMask(zipCode);
      this.zipCode = Util.zipCodeMask(zipCode)

      this.zipCodeIsValid = (this.zipCode.length === 10);
    }
  }

  OnChangeEmail(email) {
    this.registerForm.value.contact = email
    this.email = email;
    this.contactIsValid = this.validadeContact();
  }

  OnChangeSkype(skype) {
    this.registerForm.value.contact = skype;
    this.skype = skype;
    this.contactIsValid = this.validadeContact();
  }

  OnChangeTelephone(telephone) {
    if (telephone) {
      const eTelephone = document.getElementById("telephone");
      eTelephone['value'] = Util.telephoneMask(telephone);
      this.registerForm.value.contact = Util.telephoneMask(telephone);
      this.telephone = Util.telephoneMask(telephone)
    }
    this.contactIsValid = this.validadeContact();
  }

  validadeContact() {
    return  (this.telephone && this.telephone.length > 13) ||
      (this.skype && this.skype !== '') ||
      (this.email && this.email.indexOf('@') > -1);
  }
}

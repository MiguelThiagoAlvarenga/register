import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ViewEncapsulation} from "@angular/cli/lib/config/schema";
import {PersonService} from "../../../services/person.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgTemplateOutlet} from "@angular/common";
import {AddressModel} from "../../../models/address.model";
import {PersonModel} from "../../../models/person.model";
import {ContactModel} from "../../../models/contact.model";
import {StateModel} from "../../../models/state.model";
import {CountyModel} from "../../../models/county.model";
import {CountyService} from "../../../services/county.service";
import {Util} from "../../../utils/util";

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
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

export class CadRegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  locale: any;
  birthDate;

  @Input() person: object;
  @Input() listState: StateModel[];
  @Output() updateList = new EventEmitter<any>();

  @ContentChild('content', {static: false}) content: TemplateRef<any>;


  listCounty: CountyModel[];
  state: StateModel;
  zipCode: String;
  cpf: String;
  telephone: String;
  email: string;
  skype: string;
  contactIsValid: boolean = false;
  cpfIsValid: boolean = false;
  zipCodeIsValid: boolean = false;

  constructor(
      private countyService: CountyService,
      private modalService: NgbModal,
      private personService: PersonService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.locale = {
      firstDayOfWeek: 1,
      dayNames: [ 'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado' ],
      dayNamesShort: [ 'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb' ],
      dayNamesMin: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort: [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez' ],
      today: 'Hoje',
      clear: 'Limpar',
      filter: 'Filtrar'
    }
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
  }
  openXl(content) {
    this.modalService.open(this.content, {size: 'xl'});
  }
  save(){
    const contact = new ContactModel(
        null,
        this.registerForm.value.email,
        this.registerForm.value.skype,
        this.registerForm.value.telephone

    )
    const address = new AddressModel(
        null,
        this.registerForm.value.address,
        this.registerForm.value.neighborhood,
        this.registerForm.value.zipCode,
        new CountyModel(this.registerForm.value.county)
    )
    const person = new PersonModel(
        null,
        this.birthDate,
        this.registerForm.value.cpf,
        this.registerForm.value.name,
        address,
        contact
    )

    this.personService.save(person).subscribe((person:PersonModel) => {
      this.updateList.emit();

      this.modalService.dismissAll('Cross click');
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
    this.modalService.dismissAll('Cross click');
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

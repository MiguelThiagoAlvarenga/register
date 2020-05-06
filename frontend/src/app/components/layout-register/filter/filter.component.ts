import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonService} from "../../../services/person.service";
import {PersonModel} from "../../../models/person.model";
import {CountyModel} from "../../../models/county.model";
import {StateModel} from "../../../models/state.model";
import {CountyService} from "../../../services/county.service";
import {Util} from "../../../utils/util";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() listState: StateModel[];

  @Output() resultFilter= new EventEmitter<any>();

  state: number;
  county: number;
  name: String;
  cpf: String;
  birthDate: Date;

  isCollapsed = false;

  filter: { type: string; value: any } = {
    type: null,
    value: null
  }

  listCounty: CountyModel[];

  constructor(
    private countyService: CountyService
  ) { }

  ngOnInit() {
    this.countyService.getAll().then((listCounty: CountyModel[]) => {
      this.listCounty = listCounty;
    });
  }

  clickColapsed() {
    this.isCollapsed = !this.isCollapsed
  }

  clickFilter() {
    this.resultFilter.emit(this.filter);
  }

  onChangeState(state){
    this.clean();
    this.filter = { type: 'state', value: state };
    this.state = state;
  }

  onChangeCounty(county){
    this.clean();
    this.filter = {type: 'county', value: county};
    this.county = county;
  }

  onChangeBirthDate(birthDate){
    this.clean();
    this.filter = {type: 'birthDate', value: birthDate};
    this.birthDate = birthDate;
  }

  onChangeName(name){
    this.clean();
    this.filter = {type: 'name', value: name};
    this.name = name;
  }

  onChangeCpf(cpf){
    this.clean();
    const eCpf = document.getElementById("cpf");
    eCpf['value'] = Util.cpfMask(cpf);
    this.cpf = Util.cpfMask(cpf);
    this.filter = {type: 'cpf', value: this.cpf};
  }

  clean(){
    this.filter = {type: null, value: null}
    this.state = null;
    this.county = null;
    this.name = null;
    this.cpf = null;
    this.birthDate = null;
  }
}

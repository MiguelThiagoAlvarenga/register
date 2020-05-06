import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonModel} from "../../../models/person.model";
import {Util} from "../../../utils/util";

@Component({
  selector: 'app-grid-register',
  templateUrl: './grid-register.component.html',
  styleUrls: ['./grid-register.component.css']
})
export class GridRegisterComponent implements OnInit {

  @Input() personList: PersonModel[];
  @Output() updatePerson= new EventEmitter<PersonModel>();

  constructor() { }

  ngOnInit() { }

  cpfMask(v) {
    return Util.cpfMask(v);
  }

  zipCodeMask(v) {
    return Util.zipCodeMask(v);
  }

  update(person: PersonModel) {
    this.updatePerson.emit(person)
  }
}

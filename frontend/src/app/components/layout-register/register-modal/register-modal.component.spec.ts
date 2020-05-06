import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadRegisterComponent } from './register-modal.component';

describe('CadRegisterComponent', () => {
  let component: CadRegisterComponent;
  let fixture: ComponentFixture<CadRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

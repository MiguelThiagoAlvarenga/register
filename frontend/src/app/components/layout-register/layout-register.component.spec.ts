import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRegisterComponent } from './layout-Register.component';

describe('LayoutRegisterComponent', () => {
  let component: LayoutRegisterComponent;
  let fixture: ComponentFixture<LayoutRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

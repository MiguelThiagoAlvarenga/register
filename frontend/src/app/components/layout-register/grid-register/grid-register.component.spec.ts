import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRegisterComponent } from './grid-register.component';

describe('GridRegisterComponent', () => {
  let component: GridRegisterComponent;
  let fixture: ComponentFixture<GridRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

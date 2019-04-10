import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerfieldComponent } from './powerfield.component';

describe('PowerfieldComponent', () => {
  let component: PowerfieldComponent;
  let fixture: ComponentFixture<PowerfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

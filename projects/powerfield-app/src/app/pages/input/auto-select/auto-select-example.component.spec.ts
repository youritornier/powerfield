import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSelectExampleComponent } from './auto-select-example.component';

describe('AutoSelectExampleComponent', () => {
  let component: AutoSelectExampleComponent;
  let fixture: ComponentFixture<AutoSelectExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSelectExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

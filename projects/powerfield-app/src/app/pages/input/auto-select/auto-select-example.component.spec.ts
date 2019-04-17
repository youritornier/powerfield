import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoselectExampleComponent } from './auto-select-example.component';

describe('AutoselectExampleComponent', () => {
  let component: AutoselectExampleComponent;
  let fixture: ComponentFixture<AutoselectExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoselectExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoselectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

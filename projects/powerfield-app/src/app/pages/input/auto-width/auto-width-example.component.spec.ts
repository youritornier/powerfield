import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWidthExampleComponent } from './auto-width-example.component';

describe('AutoWidthExampleComponent', () => {
  let component: AutoWidthExampleComponent;
  let fixture: ComponentFixture<AutoWidthExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoWidthExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoWidthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

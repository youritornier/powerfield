import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowidthExampleComponent } from './autowidth-example.component';

describe('AutowidthExampleComponent', () => {
  let component: AutowidthExampleComponent;
  let fixture: ComponentFixture<AutowidthExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutowidthExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutowidthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

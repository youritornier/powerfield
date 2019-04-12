import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowidthComponent } from './autowidth.component';

describe('AutowidthComponent', () => {
  let component: AutowidthComponent;
  let fixture: ComponentFixture<AutowidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutowidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutowidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

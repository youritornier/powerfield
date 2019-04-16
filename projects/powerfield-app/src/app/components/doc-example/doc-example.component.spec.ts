import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocExampleComponent } from './doc-example.component';

describe('DocExampleComponent', () => {
  let component: DocExampleComponent;
  let fixture: ComponentFixture<DocExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationExampleComponent } from './documentation-example.component';

describe('DocExampleComponent', () => {
  let component: DocumentationExampleComponent;
  let fixture: ComponentFixture<DocumentationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

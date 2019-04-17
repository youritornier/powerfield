import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationExampleCardComponent } from './documentation-example-card.component';

describe('DocumentationExampleCardComponent', () => {
  let component: DocumentationExampleCardComponent;
  let fixture: ComponentFixture<DocumentationExampleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationExampleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationExampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationApiComponent } from './documentation-api.component';

describe('DocumentationApiComponent', () => {
  let component: DocumentationApiComponent;
  let fixture: ComponentFixture<DocumentationApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

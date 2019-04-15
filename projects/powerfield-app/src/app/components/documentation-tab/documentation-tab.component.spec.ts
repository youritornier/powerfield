import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationTabComponent } from './documentation-tab.component';

describe('DocumentationTabComponent', () => {
  let component: DocumentationTabComponent;
  let fixture: ComponentFixture<DocumentationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

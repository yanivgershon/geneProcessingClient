import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCsvResultsComponent } from './view-csv-results.component';

describe('ViewCsvResultsComponent', () => {
  let component: ViewCsvResultsComponent;
  let fixture: ComponentFixture<ViewCsvResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCsvResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCsvResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

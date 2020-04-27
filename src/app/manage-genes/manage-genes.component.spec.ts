import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGenesComponent } from './manage-genes.component';

describe('ManageGenesComponent', () => {
  let component: ManageGenesComponent;
  let fixture: ComponentFixture<ManageGenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

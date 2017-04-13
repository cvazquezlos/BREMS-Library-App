import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoansComponent } from './manage-loans.component';

describe('ManageLoansComponent', () => {
  let component: ManageLoansComponent;
  let fixture: ComponentFixture<ManageLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

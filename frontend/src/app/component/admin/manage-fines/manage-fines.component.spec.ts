import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFinesComponent } from './manage-fines.component';

describe('ManageFinesComponent', () => {
  let component: ManageFinesComponent;
  let fixture: ComponentFixture<ManageFinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

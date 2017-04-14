import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceComponent } from './edit.component';

describe('EditResourceComponent', () => {
  let component: EditResourceComponent;
  let fixture: ComponentFixture<EditResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditResourceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

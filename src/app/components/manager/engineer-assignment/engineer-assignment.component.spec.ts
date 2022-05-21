import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerAssignmentComponent } from './engineer-assignment.component';

describe('EngineerAssignmentComponent', () => {
  let component: EngineerAssignmentComponent;
  let fixture: ComponentFixture<EngineerAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

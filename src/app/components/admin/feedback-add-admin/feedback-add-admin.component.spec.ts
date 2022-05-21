import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAddAdminComponent } from './feedback-add-admin.component';

describe('FeedbackAddAdminComponent', () => {
  let component: FeedbackAddAdminComponent;
  let fixture: ComponentFixture<FeedbackAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackAddAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

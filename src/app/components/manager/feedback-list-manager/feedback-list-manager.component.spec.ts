import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListManagerComponent } from './feedback-list-manager.component';

describe('FeedbackListManagerComponent', () => {
  let component: FeedbackListManagerComponent;
  let fixture: ComponentFixture<FeedbackListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackListManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

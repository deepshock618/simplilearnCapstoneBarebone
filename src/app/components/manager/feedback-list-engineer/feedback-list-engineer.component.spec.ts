import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListEngineerComponent } from './feedback-list-engineer.component';

describe('FeedbackListEngineerComponent', () => {
  let component: FeedbackListEngineerComponent;
  let fixture: ComponentFixture<FeedbackListEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackListEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

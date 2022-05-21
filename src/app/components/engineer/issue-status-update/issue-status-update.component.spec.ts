import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueStatusUpdateComponent } from './issue-status-update.component';

describe('IssueStatusUpdateComponent', () => {
  let component: IssueStatusUpdateComponent;
  let fixture: ComponentFixture<IssueStatusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueStatusUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueRemarksAddComponent } from './issue-remarks-add.component';

describe('IssueRemarksAddComponent', () => {
  let component: IssueRemarksAddComponent;
  let fixture: ComponentFixture<IssueRemarksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueRemarksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueRemarksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

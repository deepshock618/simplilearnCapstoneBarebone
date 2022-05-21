import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDataComponent } from './issue-data.component';

describe('IssueDataComponent', () => {
  let component: IssueDataComponent;
  let fixture: ComponentFixture<IssueDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

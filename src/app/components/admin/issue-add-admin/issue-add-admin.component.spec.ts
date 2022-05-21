import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAddAdminComponent } from './issue-add-admin.component';

describe('IssueAddAdminComponent', () => {
  let component: IssueAddAdminComponent;
  let fixture: ComponentFixture<IssueAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueAddAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

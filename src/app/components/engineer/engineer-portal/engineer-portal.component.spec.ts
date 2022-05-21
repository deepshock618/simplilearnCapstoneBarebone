import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPortalComponent } from './engineer-portal.component';

describe('EngineerPortalComponent', () => {
  let component: EngineerPortalComponent;
  let fixture: ComponentFixture<EngineerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

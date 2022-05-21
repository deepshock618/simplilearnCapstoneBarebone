import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerUpdateComponent } from './engineer-update.component';

describe('EngineerUpdateComponent', () => {
  let component: EngineerUpdateComponent;
  let fixture: ComponentFixture<EngineerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

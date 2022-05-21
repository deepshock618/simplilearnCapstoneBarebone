import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerDataComponent } from './engineer-data.component';

describe('EngineerDataComponent', () => {
  let component: EngineerDataComponent;
  let fixture: ComponentFixture<EngineerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

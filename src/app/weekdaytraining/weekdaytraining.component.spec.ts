import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaytrainingComponent } from './weekdaytraining.component';

describe('WeekdaytrainingComponent', () => {
  let component: WeekdaytrainingComponent;
  let fixture: ComponentFixture<WeekdaytrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekdaytrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdaytrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

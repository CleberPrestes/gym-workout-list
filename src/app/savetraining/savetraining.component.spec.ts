import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetrainingComponent } from './savetraining.component';

describe('SavetrainingComponent', () => {
  let component: SavetrainingComponent;
  let fixture: ComponentFixture<SavetrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavetrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

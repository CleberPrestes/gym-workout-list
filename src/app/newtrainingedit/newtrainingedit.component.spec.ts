import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrainingeditComponent } from './newtrainingedit.component';

describe('NewtrainingeditComponent', () => {
  let component: NewtrainingeditComponent;
  let fixture: ComponentFixture<NewtrainingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrainingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtrainingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

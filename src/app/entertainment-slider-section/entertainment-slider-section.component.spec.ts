import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentSliderSectionComponent } from './entertainment-slider-section.component';

describe('EntertainmentSliderSectionComponent', () => {
  let component: EntertainmentSliderSectionComponent;
  let fixture: ComponentFixture<EntertainmentSliderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentSliderSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentSliderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

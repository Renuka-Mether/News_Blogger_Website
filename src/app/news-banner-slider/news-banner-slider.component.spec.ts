import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBannerSliderComponent } from './news-banner-slider.component';

describe('NewsBannerSliderComponent', () => {
  let component: NewsBannerSliderComponent;
  let fixture: ComponentFixture<NewsBannerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBannerSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBannerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

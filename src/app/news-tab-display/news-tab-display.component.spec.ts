import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTabDisplayComponent } from './news-tab-display.component';

describe('NewsTabDisplayComponent', () => {
  let component: NewsTabDisplayComponent;
  let fixture: ComponentFixture<NewsTabDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTabDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTabDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

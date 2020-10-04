import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingNewsMarqueeComponent } from './breaking-news-marquee.component';

describe('BreakingNewsMarqueeComponent', () => {
  let component: BreakingNewsMarqueeComponent;
  let fixture: ComponentFixture<BreakingNewsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingNewsMarqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

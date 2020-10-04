import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingNewsSectionComponent } from './breaking-news-section.component';

describe('BreakingNewsSectionComponent', () => {
  let component: BreakingNewsSectionComponent;
  let fixture: ComponentFixture<BreakingNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingNewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

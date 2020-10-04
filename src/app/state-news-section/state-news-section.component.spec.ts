import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateNewsSectionComponent } from './state-news-section.component';

describe('StateNewsSectionComponent', () => {
  let component: StateNewsSectionComponent;
  let fixture: ComponentFixture<StateNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateNewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

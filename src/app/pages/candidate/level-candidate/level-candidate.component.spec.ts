import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCandidateComponent } from './level-candidate.component';

describe('LevelCandidateComponent', () => {
  let component: LevelCandidateComponent;
  let fixture: ComponentFixture<LevelCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

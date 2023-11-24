import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCandidateComponent } from './info-candidate.component';

describe('InfoCandidateComponent', () => {
  let component: InfoCandidateComponent;
  let fixture: ComponentFixture<InfoCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

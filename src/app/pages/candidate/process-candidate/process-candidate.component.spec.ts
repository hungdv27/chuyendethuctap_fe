import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCandidateComponent } from './process-candidate.component';

describe('ProcessCandidateComponent', () => {
  let component: ProcessCandidateComponent;
  let fixture: ComponentFixture<ProcessCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

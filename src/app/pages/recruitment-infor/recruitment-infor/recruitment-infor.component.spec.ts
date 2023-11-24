import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentInforComponent } from './recruitment-infor.component';

describe('RecruitmentInforComponent', () => {
  let component: RecruitmentInforComponent;
  let fixture: ComponentFixture<RecruitmentInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentInforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

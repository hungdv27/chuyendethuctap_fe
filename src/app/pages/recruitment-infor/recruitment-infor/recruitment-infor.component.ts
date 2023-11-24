import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruitment-infor',
  templateUrl: './recruitment-infor.component.html',
  styleUrls: ['./recruitment-infor.component.less'],
})
export class RecruitmentInforComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      code: ['TD01'],
      startDate: ['18-11-2023'],
      endDate: ['18-12-2023'],
      position: ['Intern'],
      quantity: ['3'],
      title: ['Tester'],
    });
  }
  ungTuyen() {
    this.router.navigate(['person-candidate']);
  }
}

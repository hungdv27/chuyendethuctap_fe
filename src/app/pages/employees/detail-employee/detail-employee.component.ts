import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validate } from 'src/app/utils/constrant';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.less'],
})
export class DetailEmployeeComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  dateoff = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      employeeCode: [null],
      employeeName: [
        null,
        [
          Validators.required,
          Validators.pattern(Validate.Name),
          Validators.minLength(3),
        ],
      ],
      birthDate: [null, [Validators.required]],
      emial: [null, [Validators.required, Validators.pattern(Validate.Email)]],
      homeTowwn: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(Validate.Phone)]],
      dateOff: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
    });
  }
  close() {
    this.router.navigate(['employee']);
  }
}

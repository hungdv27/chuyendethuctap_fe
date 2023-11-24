import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validate } from 'src/app/utils/constrant';

@Component({
  selector: 'app-personnel-information',
  templateUrl: './personnel-information.component.html',
  styleUrls: ['./personnel-information.component.less'],
})
export class PersonnelInformationComponent implements OnInit {
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
}

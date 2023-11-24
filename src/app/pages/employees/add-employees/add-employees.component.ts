import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Validate } from 'src/app/utils/constrant';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.less'],
})
export class AddEmployeesComponent implements OnInit {
  date = null;
  dateoff = null;
  validateForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) {}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
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
  list: any;
  createUser() {}
  genderChange(value: string): void {
    //   this.validateForm
    //     .get('gender')!
    //     .setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }
  roleChange(value: string): void {
    //   this.validateForm
    //     .get('gender')!
    //     .setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }
  close() {
    this.router.navigate(['employee']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CandidateListService } from 'src/app/service/candidate-list';
import { Validate } from 'src/app/utils/constrant';

@Component({
  selector: 'app-person-candidate-add',
  templateUrl: './person-candidate-add.component.html',
  styleUrls: ['./person-candidate-add.component.less'],
})
export class PersonCandidateAddComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  dateoff = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private candidateService: CandidateListService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // employeeCode: [null],
      // employeeName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      emial: [null, [Validators.required, Validators.pattern(Validate.Email)]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(Validate.Phone)]],
      // dateOff: [null, [Validators.required]],
      // userName: [null, [Validators.required]],
      // password: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
      level: [null, [Validators.required]],
      numberOfExp: [null, [Validators.required]],
      source: [null, [Validators.required]], // để tạm là kỹ năng
      careerGoals: [null, [Validators.required]], // mục tiêu
      note: [null, [Validators.required]],
      hobbies: [null, [Validators.required]],
      expectedSalary: [null, [Validators.required]], // mức  lương
      applyPosition: [null, [Validators.required]], // vị trí
    });
  }
  close() {
    this.router.navigate(['person-candidate']);
  }
  createUser() {
    const res = {
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName,

      // employeeName: this.validateForm.value.employeeName,
      phone: this.validateForm.value.phone,
      birthDate: moment(this.validateForm.value.birthDate).format('yyyy-MM-DD'),
      address: this.validateForm.value.address,
      level: this.validateForm.value.level,
      gender: this.validateForm.value.gender,
      numberOfExp: this.validateForm.value.numberOfExp,
      email: this.validateForm.value.emial,
      source: this.validateForm.value.source,
      careerGoals: this.validateForm.value.careerGoals, // mục tiêu
      note: this.validateForm.value.note,
      hobbies: this.validateForm.value.hobbies,
      expectedSalary: this.validateForm.value.expectedSalary, // mức  lương
      applyPosition: this.validateForm.value.applyPosition,
    };
    console.log('res', res);
    this.candidateService.createData(res).subscribe((value) => {
      console.log(value);
      this.notification.blank('Thông báo', 'Thêm mới thành công', {
        nzStyle: {
          width: '300px',
          marginLeft: '-265px',
          color: '#56CA00',

          // backgroundColor: 'blue',
        },
        nzClass: 'test-class',
      });
      this.validateForm = this.fb.group({
        // employeeCode: [null],
        // employeeName: [null, [Validators.required]],
        firstName: [null],
        lastName: [null],
        birthDate: [null],
        emial: [null],
        address: [null],
        phone: [null],
        // dateOff: [null, [Validators.required]],
        // userName: [null, [Validators.required]],
        // password: [null, [Validators.required]],
        gender: [null],
        role: [null],
        level: [null],
        numberOfExp: [null],
        source: [null], // để tạm là kỹ năng
      });
      this.router.navigate(['person-candidate']);
    });
  }
}

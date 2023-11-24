import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CandidateListService } from 'src/app/service/candidate-list';
import { Validate } from 'src/app/utils/constrant';

@Component({
  selector: 'app-info-candidate',
  templateUrl: './info-candidate.component.html',
  styleUrls: ['./info-candidate.component.less'],
})
export class InfoCandidateComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;
  @Input() id: any;
  date = null;
  dateoff = null;
  showEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private candidateService: CandidateListService,
    private notification: NzNotificationService
  ) {}
  idPro: any;
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('chang id', this.id);
    this.idPro = this.id;

    this.candidateService.getDataDetail(this.idPro).subscribe((value) => {
      console.log('value detail candidate', value);
      this.validateForm.patchValue({
        employeeCode: value.candidateCode,
        // employeeName: value.fullName,
        firstName: value.firstName,
        lastName: value.lastName,

        // birthDate: value.birthDate,
        birthDate: moment(value.birthDate).format('DD-MM-yyyy'),
        emial: value.email,
        address: value.address,
        phone: value.phone,
        // dateOff: ,
        // userName: ,
        // password:,
        gender: value.genderName,
        // role: ,
        level: value.level,
        numberOfExp: value.numberOfExp,
        source: value.source,
        date: value.birthDate,
        careerGoals: value.careerGoals, // mục tiêu
        note: value.note,
        hobbies: value.hobbies,
        expectedSalary: value.expectedSalary, // mức  lương
        applyPosition: value.applyPosition,
      });
    });
  }
  // showModal(): void {
  //   this.isVisible = true;
  // }
  // handleCancel(): void {
  //   console.log('Button cancel clicked!');
  //   this.isVisible = false;
  // }
  // handleOk(): void {
  //   console.log('Button ok clicked!');
  //   this.isVisible = false;
  // }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      employeeCode: [null],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      emial: [null, [Validators.required, Validators.pattern(Validate.Email)]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(Validate.Phone)]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
      level: [null, [Validators.required]],
      numberOfExp: [null, [Validators.required]],
      source: [null, [Validators.required]],
      careerGoals: [null, [Validators.required]], // mục tiêu
      note: [null, [Validators.required]],
      hobbies: [null, [Validators.required]],
      expectedSalary: [null, [Validators.required]], // mức  lương
      applyPosition: [null, [Validators.required]], // vị trí
    });
  }

  getData() {
    this.candidateService.getDataDetail(this.idPro).subscribe((value) => {
      console.log('value detail candidate', value);
      this.validateForm.patchValue({
        employeeCode: value.candidateCode,
        firstName: value.firstName,
        lastName: value.lastName,
        birthDate: moment(value.birthDate).format('DD-MM-yyyy'),
        emial: value.email,
        address: value.address,
        phone: value.phone,
        gender: value.genderName,
        level: value.level,
        numberOfExp: value.numberOfExp,
        source: value.source,
        date: value.birthDate,
        careerGoals: value.careerGoals, // mục tiêu
        note: value.note,
        hobbies: value.hobbies,
        expectedSalary: value.expectedSalary, // mức  lương
        applyPosition: value.applyPosition,
      });
    });
  }

  edit() {
    this.showEdit = true;
  }
  save() {
    const res = {
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName,

      // employeeName: this.validateForm.value.employeeName,
      phone: this.validateForm.value.phone,
      birthDate: moment(this.validateForm.value.birthDate, 'DD-MM-yyyy').format(
        'yyyy-MM-DD'
      ),
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
    this.candidateService.updateData(this.idPro, res).subscribe((value) => {
      console.log('valie', value);
      this.notification.blank('Thông báo', 'Chỉnh sửa thành công', {
        nzStyle: {
          width: '300px',
          marginLeft: '-265px',
          color: '#56CA00',

          // backgroundColor: 'blue',
        },
        nzClass: 'test-class',
      });
      this.showEdit = false;
    });
  }
  cancel() {
    // this.isSave = false;
    this.showEdit = false;
  }
}

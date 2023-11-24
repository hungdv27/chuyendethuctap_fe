import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CandidateListService } from 'src/app/service/candidate-list';
import { Validate } from 'src/app/utils/constrant';

@Component({
  selector: 'app-person-candidate-detail',
  templateUrl: './person-candidate-detail.component.html',
  styleUrls: ['./person-candidate-detail.component.less'],
})
export class PersonCandidateDetailComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  dateoff = null;
  id: any;
  showEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateListService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('i', this.id);
    this.validateForm = this.fb.group({
      employeeCode: [null],
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
      source: [null, [Validators.required]],
    });
    this.getData();
  }
  getData() {
    this.candidateService.getDataDetail(this.id).subscribe((value) => {
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
        gender: value.gender,
        // role: ,
        level: value.level,
        numberOfExp: value.numberOfExp,
        source: value.source,
        date: value.birthDate,
      });
    });
  }
  close() {
    this.router.navigate(['person-candidate']);
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
    };
    console.log('res', res);
    this.candidateService.updateData(this.id, res).subscribe((value) => {
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

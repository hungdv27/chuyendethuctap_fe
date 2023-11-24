import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CandidateWorkExpericencationService } from 'src/app/service/candidate-workExpr.service';

@Component({
  selector: 'app-experience-candidate',
  templateUrl: './experience-candidate.component.html',
  styleUrls: ['./experience-candidate.component.less'],
})
export class ExperienceCandidateComponent implements OnInit {
  validateForm!: FormGroup;
  form!: FormGroup;
  isVisible = false;
  experienceForm!: FormGroup;
  @Input() id: any;
  lstData: any;
  idpr: any;
  isAdd = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private candidateService: CandidateWorkExpericencationService,
    private notification: NzNotificationService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('chang id', this.id);
    this.idpr = this.id;
    // this.candidateService.getData(this.id).subscribe((value) => {
    //   console.log('vl', value);
    //   this.lstData = value;
    // });
  }
  getData() {
    this.candidateService.getData(this.idpr).subscribe((value) => {
      console.log('vl', value);
      this.lstData = value;
      // value.forEach((element: any) => {
      //   this.formEdu.patchValue({
      //     eduName: element.eduName, // tên trường
      //     majors: element.majors, // chuyên ngành
      //     formOfTraining: element.formOfTraining, // hình thức đào tạo
      //     certfication: element.certfication, // trình độ học vấn
      //     startDate: element.startDate, // ngày bắt đầy
      //     endDate: element.endDate, // ngày kết thúc
      //   });
      // });
      // this.lstData.forEach((element: any) => {
      //   this.form.patchValue({
      //     title: element.title, // tên trường
      //     companyName: element.companyName, // chuyên ngành
      //     startDate: element.startDate, // hình thức đào tạo
      //     endDate: element.endDate, // trình độ học vấn
      //     date: `${element.startDate}  đến ${element.endDate}`,
      //   });
      // });
      console.log('this.', this.form);
    });
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null], // tên trường
      companyName: [null], // chuyên ngành
      startDate: [null], // hình thức đào tạo
      endDate: [null], // trình độ học vấn
      date: [null],
      work: [null],
    });
    this.validateForm = this.fb.group({
      title: [null], // tên trường
      companyName: [null], // chuyên ngành
      startDate: [null], // hình thức đào tạo
      endDate: [null], // trình độ học vấn
      date: [null],
      work: [null],
    });

    this.experienceForm = this.fb.group({
      lastName: [null], // họ đệm
      firstName: [null], //tên
      birthDate: [null], // ngày sinh
      gender: [null], // giới tính
      phone: [null], // điện thoại
      email: [null], // email
      position: [null], // vị trí
      rank: [null], //level
      address: [null], // địa chỉ
      careerGoals: [null], // mục tiêu nghề nghiệp
      interest: [null], // sở thích
      skills: [null], // kĩ năng
      socialNetwork: [null], // mạng xã hội
    });
    this.getData();
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  showAdd() {
    this.isAdd = true;
  }
  addCancel() {
    this.isAdd = false;
  }
  addOk() {
    const res = {
      title: this.validateForm.value.title,
      companyName: this.validateForm.value.companyName,
      startDate: moment(this.validateForm.value.startDate).format('yyyy-MM-DD'),
      endDate: moment(this.validateForm.value.endDate).format('yyyy-MM-DD'),
      candidate: {
        id: this.idpr,
      },
    };
    console.log('res', res);
    this.candidateService.createDataWork(res).subscribe((value) => {
      this.notification.blank('Thông báo', 'Thêm mới thành công', {
        nzStyle: {
          width: '300px',
          marginLeft: '-265px',
          color: '#56CA00',
        },
        nzClass: 'test-class',
      });
      this.getData();
      this.validateForm.patchValue({
        title: '', // tên trường
        companyName: '', // chuyên ngành
        startDate:'', // hình thức đào tạo
        endDate: '', // trình độ học vấn
        date: '',
        work:'',
      });

      this.isAdd = false;
    });
  }
  deleteTD(id: any) {
    this.candidateService.deleteWork(id).subscribe((value) => {
      this.notification.blank('Thông báo', 'Xóa thành công', {
        nzStyle: {
          width: '300px',
          marginLeft: '-265px',
          color: '#56CA00',
        },
        nzClass: 'test-class',
      });
      this.getData();
      this.isAdd = false;
    });
  }
}

import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { RecruitInterviewService } from 'src/app/service/interview.service';

@Component({
  selector: 'app-process-candidate',
  templateUrl: './process-candidate.component.html',
  styleUrls: ['./process-candidate.component.less'],
})
export class ProcessCandidateComponent implements OnInit {
  lienHePVan: boolean = false;
  btnlienhe: boolean = true;
  checkBtn: boolean = true;
  access: boolean = true;
  current = 0;
  showFooter: boolean = false;
  isVisible = false;
  btnDanhGia = true;
  danhGia = false;
  goiTuVan = false;
  showReviewCV = false;
  showLichPvan: boolean = false;
  showPhongVanVaDanhGia: boolean = false;
  XemDanhGia: boolean = false;
  showKetQuaDo: boolean = false;
  showKetQuaTruot: boolean = false;

  validateForm!: FormGroup;
  experienceForm!: FormGroup;
  phongvan: boolean = false;
  ketLuans: boolean = false;
  btnPhongVan: boolean = true;
  btnKetLuan: boolean = true;
  danhGiaUVs: boolean = false;
  xemDanhGiaUV: boolean = false;
  btnPvan: boolean = true;
  isEdit: boolean = true; // ứng viên = true , nhân viên = false
  lstData: any[] = [];
  radioValueDG: any;
  viewListDG: any;
  idRecruit: any;
  showLichPvanView: boolean = false;
  showLichPvanViewThamGia: boolean = false;
  pointForm!: FormGroup;
  btnHuyTC: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private RecruitInterviewService: RecruitInterviewService
  ) {}
  pvForm!: FormGroup;
  @Input() id: any;
  idPro: any;
  lstTable: any[] = [];
  showReviewCVView: boolean = false;
  lstShowViewUV: any;
  lstShowViewNV: any;
  lstShowView: any;
  lstPVan: any;
  showPhongVanVaDanhGiaView: boolean = false;
  employeeForm!: FormGroup;
  pointFormView!: FormGroup;
  showReviewCVTuChoi: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('chang id', this.id);
    this.idPro = parseInt(this.id);
  }
  ngOnInit(): void {
    // this.lstData = this.data;
    // console.log('this.lstData', this.lstData);

    // console.log('this.', this.viewListDG);
    this.validateForm = this.fb.group({
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
    // lên lịch phỏng vấn
    this.experienceForm = this.fb.group({
      // lst: [null], // họ đệm
      hinhthuc: [null],
      date: [null],
      time: [null],
      address: [null],
      note: [null],
    });

    // phỏng vấn
    this.pvForm = this.fb.group({
      mucLuong: [null],
      timeTang: [null],
      note: [null],
    });
    // đánh giá ứng viên
    this.pointForm = this.fb.group({
      nangLuc: [0],
      thaiDo: [0],
      kynang: [0],
    });
    // xem đánh giá ứng viên
    this.pointFormView = this.fb.group({
      nangLuc: [0],
      thaiDo: [0],
      kynang: [0],
    });
    // nhân viên
    this.employeeForm = this.fb.group({
      code: [null],
      name: [null],
      chuDanh: [null],
    });
    if (this.current === 0) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
    this.RecruitInterviewService.getDataEmployee().subscribe((res) => {
      console.log('res', res);
      this.lstTable = res;
      console.log(' this.lstTable', this.lstTable);
    });
    this.getData();
  }
  getData() {
    this.RecruitInterviewService.getData(this.idPro).subscribe((value) => {
      console.log(value);
      this.lstShowView = value;
      console.log('this.lstShowView', this.lstShowView);
      this.idRecruit = value.id;
      console.log(this.idRecruit);
      if (value.statusDG === 'DANH_GIA') {
        this.current = 1;
        this.showReviewCV = false;
        this.showReviewCVView = true;
        this.btnDanhGia = false;
        this.getDetailEmployee(value.employeeId);
      }
      if (value.statusPV === 'PHONG_VAN') {
        this.current = 1;
        this.showLichPvanView = false;
        this.showLichPvanView = true;
        this.btnlienhe = false;
        this.getDetailEmployee(value.employeeId);
      }
      // if (value.statusTGPV === 'PHONG_VAN') {
      //   this.current = 1;
      //   this.showLichPvanView = false;
      //   this.showLichPvanView = true;
      //   this.btnlienhe = false;
      //   this.getDetailEmployee(value.employeeId);
      // }
      if (value.statusTGPV === 'THAM_GIA_PHONG_VAN') {
        this.current = 2;
        this.showLichPvanView = false;
        this.showLichPvanViewThamGia = true;
      }
      if (value.statusKQ === 'KET_QUA_PHONG_VAN') {
        this.showPhongVanVaDanhGiaView = true;
        this.btnPhongVan = false;
      }
      if (value.personalityPoint !== null) {
        this.current = 3;
        this.danhGiaUVs = false;
        this.XemDanhGia = true;
        this.btnPhongVan = false;
        this.pointFormView.patchValue({
          nangLuc: value.personalityPoint,
          thaiDo: value.confidentPoint,
          kynang: value.dressPoint,
        });
      }
      if (value.personalityPoint === null) {
        // this.current = 3;
        // this.danhGiaUVs = false;
        // this.XemDanhGia = true;
        this.btnPhongVan = true;
        // this.pointFormView.patchValue({
        //   nangLuc: value.personalityPoint,
        //   thaiDo: value.confidentPoint,
        //   kynang: value.dressPoint,
        // });
      }
      if (value.statusKL === 'KET_LUAN_TU_CHOI') {
        this.btnKetLuan = false;
        this.ketLuans = false;
        this.showKetQuaDo = false;
        this.btnHuyTC = false;
        this.showKetQuaTruot = true;
      }
      if (value.statusKL === 'KET_LUAN_DONG_Y') {
        this.ketLuans = false;
        this.btnKetLuan = false;
        this.showKetQuaDo = true;
        this.showKetQuaTruot = false;
        this.btnHuyTC = false;
      }
      if (value.statusDG === 'TU_CHOI') {
        this.showFooter = false;
        this.showReviewCVTuChoi = true;
        this.showReviewCV = false;
        this.checkBtn = false;
        this.btnHuyTC = false;
        this.getDetailEmployee(value.employeeId);
      }
      if (value.statusPV === 'TU_CHOI') {
        this.showFooter = false;
        // this.showLichPvanView = true;
        // this.showReviewCV = false;
        // this.checkBtn = false;
        this.btnHuyTC = false;
        this.showLichPvanView = false;
        this.showLichPvanViewThamGia = true;
        this.getDetailEmployee(value.employeeId);
      }
    });
  }
  getDetailEmployee(idEmployee: any) {
    this.RecruitInterviewService.getDetailEmployee(idEmployee).subscribe(
      (value) => {
        this.lstShowViewNV = value;
        console.log('this.lstShowViewNV', this.lstShowViewNV);
        this.employeeForm.patchValue({
          code: value.employeeCode,
          name: value.fullName,
          chuDanh: value.jobTitle,
        });
        console.log(' this.employeeForm', this.employeeForm);
      }
    );
  }
  getDetailCandidat(id: any) {
    // this.RecruitInterviewService.getDetailEmployee(this.id).subscribe(value=>{
    //     this.lstShowViewNV = value;
    // })
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
    this.current = 1;
    this.showFooter = true;
  }
  choose(item: any) {
    console.log('item', item);
    this.radioValueDG = '';
    this.radioValueDG = item;
  }
  showDanhGia(): void {
    this.danhGia = true;
  }
  danhGiaCancel(): void {
    console.log('Button cancel clicked!');
    this.danhGia = false;
  }
  danhGiaOk(): void {
    console.log('Button ok clicked!');
    this.danhGia = false;
    this.showReviewCV = true;
    this.btnDanhGia = false;
    this.viewListDG = this.radioValueDG;
    console.log('list', this.viewListDG);
  }
  showGoiTuVan(): void {
    this.goiTuVan = true;
    this.btnDanhGia = false;
  }
  goiTuVanOK() {
    this.goiTuVan = false;
  }
  goiTuVanCancel() {
    this.goiTuVan = false;
  }

  refuse() {
    const res = {
      employeeId: this.viewListDG.id,
      candidateId: this.idPro,
      statusDG: 'TU_CHOI',
      note: moment(new Date()).format('DD-MM-yyyy'),
    };
    console.log('res', res);
    this.RecruitInterviewService.DanhGiaCV(res).subscribe((value) => {
      this.current = 1;
      this.showFooter = false;
      this.access = false;
      this.checkBtn = false;
      this.btnHuyTC = false;
      this.getData();
    });
  }
  approve(item: any) {
    console.log('item', item);
    const res = {
      employeeId: this.viewListDG.id,
      candidateId: this.idPro,
      statusDG: 'DANH_GIA',
      note: moment(new Date()).format('DD-MM-yyyy'),
    };
    console.log('res', res);
    this.RecruitInterviewService.DanhGiaCV(res).subscribe((value) => {
      this.current = 1;
      this.checkBtn = false;
      this.getData();
    });
  }
  lienHePV() {
    this.lienHePVan = true;
  }
  lienHePVCancel(): void {
    this.lienHePVan = false;
  }
  lstLichPVAn: any;
  lienHePVOk(): void {
    // this.current = 2;
    // this.lienHePVan = false;
    // this.btnlienhe = false;
    // this.showLichPvan = true;
    console.log('this.experienceForm', this.experienceForm.value);
    const res = {
      notePV: this.experienceForm.value.note,
      type: this.experienceForm.value.hinhthuc,
      time:
        `${moment(this.experienceForm.value.date).format('yyyy-MM-DD')}` +
        `T` +
        `${moment(this.experienceForm.value.time).format('HH:mm:ss')}`,
      address: this.experienceForm.value.address,
      statusPV: 'PHONG_VAN',
    };
    console.log('res', res);
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        this.current = 2;
        this.lienHePVan = false;
        this.btnlienhe = false;
        this.showLichPvan = false;
        // this.showLichPvanView = false;
        // this.getData();
        this.lstLichPVAn = res;
        this.getData();
      }
    );
  }
  thamGia() {
    // this.current = 2;
    // this.btnPvan = false;
    const res = {
      statusTGPV: 'THAM_GIA_PHONG_VAN',
    };
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        this.current = 2;
        this.lienHePVan = false;
        this.btnlienhe = false;
        this.showLichPvan = false;
        // this.showLichPvanView = false;
        this.showLichPvanView = true;

        this.getData();
      }
    );
  }
  tuChoi() {
    const res = {
      statusPV: 'TU_CHOI',
    };
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        // this.phongvan = false;
        //  this.showFooter = false;
        this.current = 2;
        this.showFooter = false;
        this.access = false;
        this.btnPvan = false;
        this.btnHuyTC = false;

        this.getData();
      }
    );
  }
  phongVan() {
    this.phongvan = true;
  }
  phongVanCancel(): void {
    this.phongvan = false;
  }
  phongVanOk(): void {
    // // this.current = 3;
    // this.phongvan = false;
    // this.showPhongVanVaDanhGia = true;
    // this.btnPhongVan = false;
    // console.log('this.fo', this.pvForm.value);
    const res = {
      statusKQ: 'KET_QUA_PHONG_VAN',
      salaryExpect: this.pvForm.value.mucLuong,
      timeIncreaseSalary: this.pvForm.value.timeTang,
      noteKQ: this.pvForm.value.note,
    };
    console.log('res', res);
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        this.phongvan = false;
        this.showPhongVanVaDanhGia = false;
        this.showPhongVanVaDanhGiaView = true;
        this.btnPhongVan = false;
        this.lstPVan = res;
        this.getData();
      }
    );
  }
  ketLuan() {
    this.ketLuans = true;
  }
  ketLuanCancel(): void {
    // this.btnKetLuan = false;
    // this.ketLuans = false;
    // this.showKetQuaTruot = true;
    const res = {
      statusKL: 'KET_LUAN_TU_CHOI',
    };
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        // this.phongvan = false;
        // this.showPhongVanVaDanhGia = false;
        // this.showPhongVanVaDanhGiaView = true;
        // this.btnPhongVan = false;
        // this.lstPVan = res;
        this.btnKetLuan = false;
        this.ketLuans = false;
        this.showKetQuaTruot = true;
        this.btnHuyTC = false;

        this.getData();
      }
    );
  }
  ketLuanOk(): void {
    const res = {
      statusKL: 'KET_LUAN_DONG_Y',
    };
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        // this.phongvan = false;
        // this.showPhongVanVaDanhGia = false;
        // this.showPhongVanVaDanhGiaView = true;
        // this.btnPhongVan = false;
        // this.lstPVan = res;
        this.btnHuyTC = false;

        this.ketLuans = false;
        this.btnKetLuan = false;
        this.showKetQuaDo = true;
        this.getData();
      }
    );
  }
  danhGiaUV() {
    this.danhGiaUVs = true;
  }
  danhGiaUVCancel(): void {
    this.danhGiaUVs = false;
  }
  danhGiaUVOk(): void {
    const res = {
      //       "personalityPoint": 1,
      // //   "confidentPoint": 1,
      // //   "dressPoint": 1,
      personalityPoint: this.pointForm.value.nangLuc,
      confidentPoint: this.pointForm.value.thaiDo,
      dressPoint: this.pointForm.value.kynang,
    };
    console.log('ré', res);
    this.RecruitInterviewService.updateData(this.idRecruit, res).subscribe(
      (value) => {
        // this.phongvan = false;
        // this.showPhongVanVaDanhGia = false;
        // this.showPhongVanVaDanhGiaView = true;
        // this.btnPhongVan = false;
        // this.lstPVan = res;
        this.current = 3;
        this.danhGiaUVs = false;
        this.XemDanhGia = true;

        this.pointFormView.patchValue({
          nangLuc: res.personalityPoint,
          thaiDo: res.confidentPoint,
          kynang: res.dressPoint,
        });
        this.getData();
      }
    );
  }
  xemDanhGia() {
    this.xemDanhGiaUV = true;
  }
  xemDanhGiaCancel(): void {
    this.xemDanhGiaUV = false;
  }
  xemDanhGiaOk(): void {
    this.xemDanhGiaUV = false;
  }
  HUY() {
    const res = {
      employeeId: this.lstShowViewNV.id,
      candidateId: this.idPro,
      statusDG: 'TU_CHOI',
      note: moment(new Date()).format('DD-MM-yyyy'),
    };
    console.log('res', res);
    this.RecruitInterviewService.DanhGiaCV(res).subscribe((value) => {
      this.showFooter = false;
      this.access = false;
      this.checkBtn = false;
      this.btnHuyTC = false;
      this.getData();
    });
  }
}

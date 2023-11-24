import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
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
    this.experienceForm = this.fb.group({
      lst: [null], // họ đệm
    });
    if (this.current === 0) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
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
    this.current = 1;
    this.showFooter = false;
    this.access = false;
    this.checkBtn = false;
  }
  approve() {
    this.current = 1;
    this.checkBtn = false;
  }
  lienHePV() {
    this.lienHePVan = true;
  }
  lienHePVCancel(): void {
    this.lienHePVan = false;
  }
  lienHePVOk(): void {
    this.current = 2;
    this.lienHePVan = false;
    this.btnlienhe = false;
    this.showLichPvan = true;
  }
  thamGia() {
    this.current = 2;
    this.btnPvan = false;
  }
  tuChoi() {
    this.current = 2;
    this.showFooter = false;
    this.access = false;
    this.btnPvan = false;
  }
  phongVan() {
    this.phongvan = true;
  }
  phongVanCancel(): void {
    this.phongvan = false;
  }
  phongVanOk(): void {
    // this.current = 3;
    this.phongvan = false;
    this.showPhongVanVaDanhGia = true;
    this.btnPhongVan = false;
  }
  ketLuan() {
    this.ketLuans = true;
  }
  ketLuanCancel(): void {
    this.btnKetLuan = false;
    this.ketLuans = false;
    this.showKetQuaTruot = true;
  }
  ketLuanOk(): void {
    this.ketLuans = false;
    this.btnKetLuan = false;
    this.showKetQuaDo = true;
  }
  danhGiaUV() {
    this.danhGiaUVs = true;
  }
  danhGiaUVCancel(): void {
    this.danhGiaUVs = false;
  }
  danhGiaUVOk(): void {
    this.current = 3;
    this.danhGiaUVs = false;
    this.XemDanhGia = true;
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
    this.showFooter = false;
  }
}

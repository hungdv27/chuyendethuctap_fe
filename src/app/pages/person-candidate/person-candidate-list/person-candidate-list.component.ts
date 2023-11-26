import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SCROLL_TABLE } from 'src/app/utils/constrant';
import { ORDER } from '../../model/user.model';
import { CandidateListService } from 'src/app/service/candidate-list';

@Component({
  selector: 'app-person-candidate-list',
  templateUrl: './person-candidate-list.component.html',
  styleUrls: ['./person-candidate-list.component.less'],
})
export class PersonCandidateListComponent implements OnInit {
  selectedValue = null;
  dataPassToChild: any = {};
  validateForm!: FormGroup;
  searchtextName = '';
  searchtextCode = '';
  searchtextLevel = '';
  searchtextPhone = '';
  searchtextEmail = '';
  searchtextKyNang = '';
  searchtextNumberOf = '';
  searchtextStatus = '';
  public isVisibleDetail: boolean = false;
  public isVisible2: boolean = false;
  public isVisibleModalDelete = false;

  isHidden: boolean = false;
  SCROLL_TABLE = SCROLL_TABLE;
  noResult!: 'Không có kết quả tìm kiếm';
  public pageNumber: number = 1;
  public pageSize: number = 10;
  total = 0;

  lstData: ORDER = {
    content: [],
    currentPage: 1,
    size: 10,
    totalElements: 0,
    totalPages: 1,
    first: 0,
    numberOfElements: 0,
  };
  date = null;

  constructor(
    private candidateListService: CandidateListService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  onChange(result: Date): void {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      employeeCode: [null],
      employeeName: [null],
      status: [null],
      level: [null],
    });
    this.getData();
    console.log(this.lstData);
  }

  editProduct(id: any) {
    console.log(id);
    // this.router.navigate(['person-candidate/detail', id]);
    this.router.navigate(['/candidate', id]);
  }

  resetForm() {
    // this.validateForm.reset();
    this.searchtextName = '';
    this.searchtextCode = '';
    this.searchtextPhone = '';
    this.searchtextEmail = '';
    this.searchtextNumberOf = '';
    this.searchtextLevel = '';
    this.getData();
  }

  getData() {
    // this.employee
    //   .getDataList(
    //     this.searchtextName,
    //     this.searchtextCode,
    //     this.lstData.size,
    //     this.lstData.totalPages
    //   )
    //   .subscribe((response: any) => {
    //     console.log(response.data.content);
    //     this.lstData.content = response.data.content;
    //     this.total = response.data.totalElements;
    //   });
    // this.lstData.content = [
    //   {
    //     idUser: 1,
    //     name: 'hoa',
    //     birth: '04/22/2023',
    //     gender: 'nữ',
    //     address: 'hn',
    //     isActive: 0,
    //   },s
    // ];
    this.candidateListService
      .getData(
        this.searchtextCode,
        this.searchtextName,
        this.searchtextPhone,
        this.searchtextEmail,
        this.searchtextNumberOf,
        this.searchtextLevel,
        this.lstData.totalPages - 1,
        this.lstData.size
      )
      .subscribe((value) => {
        console.log('value candidate list', value, value.content);
        this.lstData = value;
        this.total = value.totalElements;
        this.pageNumber;
      });
  }
  deleteData(id: number) {
    this.isVisibleDetail = true;
    this.dataPassToChild = id;
    // this.getData();
    // this.router.navigate(['/person-candidate']);
    // this.candidateListService
    //   .getData(
    //     this.searchtextName,
    //     this.searchtextPhone,
    //     this.searchtextEmail,
    //     this.searchtextNumberOf,
    //     this.searchtextLevel,
    //     this.lstData.totalPages,
    //     this.lstData.size
    //   )
    //   .subscribe((value) => {
    //     console.log('value candidate list', value, value.content);
    //     this.lstData = value;
    //     this.total = value.totalElements;
    //     this.pageNumber;
    //   });
  }
  changeCurrentPage(currentPage: any) {
    this.lstData.currentPage = currentPage;
    this.lstData.totalPages = currentPage;
    this.getData();
  }
  createProduct() {
    this.router.navigate(['person-candidate/add']);
  }
  search() {
    console.log(
      this.searchtextName,
      this.searchtextCode,
      this.searchtextLevel,
      this.searchtextPhone,
      this.searchtextEmail,
      this.searchtextKyNang,
      this.searchtextNumberOf
    );
    this.getData();
  }

  // gotoList() {
  //   this.router.navigate(['employee']);
  // }
  statusChange(value: string): void {}
  getStatus(item: any) {
    console.log('ststua', item.status);
    switch (item?.status) {
      case 'CHO_DANH_GIA':
        return {
          className: 'success',
          label: 'Chờ đánh giá',
        };
      case 'DANH_GIA':
        return {
          className: 'danger',
          label: 'Đánh giá',
        };
      case 'PHONG_VAN':
        return {
          className: 'success',
          label: 'Phỏng vấn',
        };
      case 'THAM_GIA_PHONG_VAN':
        return {
          className: 'danger',
          label: 'Tham gia phỏng vấn',
        };
      case 'KET_QUA_PHONG_VAN':
        return {
          className: 'success',
          label: 'Kết quả phỏng vấn',
        };
      case 'KET_LUAN_DONG_Y':
        return {
          className: 'danger',
          label: 'Đạt phỏng vấn',
        };
      case 'KET_LUAN_TU_CHOI':
        return {
          className: 'success',
          label: 'Không đạt phỏng vấn',
        };
      case 'TU_CHOI':
        return {
          className: 'success',
          label: 'Từ chối',
        };
      default:
        return {
          className: '',
          label: '',
        };
    }
  }
  xemNhanh() {
    console.log('xem nhanh');
  }
}

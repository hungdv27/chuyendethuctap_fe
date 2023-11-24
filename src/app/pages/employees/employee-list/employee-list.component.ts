import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SCROLL_TABLE } from 'src/app/utils/constrant';
import { ORDER } from '../../model/user.model';
import { EmployeeService } from 'src/app/service/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less'],
})
export class EmployeeListComponent implements OnInit {
  selectedValue = null;
  dataPassToChild: any = {};
  validateForm!: FormGroup;
  searchtextName = '';
  searchtextCode = '';

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
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  onChange(result: Date): void {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      employeeCode: [null],
      employeeName: [null],
      status: [null],
    });
    this.getData();
  }

  editProduct(id: any) {
    console.log(id);
    this.router.navigate(['employee/detail', id]);
  }

  resetForm() {
    this.validateForm.reset();
    this.searchtextName = '';
    this.searchtextCode = '';
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
    //   },
    // ];

    this.employeeService.getData().subscribe((value) => {
      console.log('value employee page', value);
    });
  }
  changeCurrentPage(currentPage: any) {
    this.lstData.currentPage = currentPage;
    this.lstData.totalPages = currentPage;
    this.getData();
  }
  createProduct() {
    this.router.navigate(['employee/add']);
  }
  search() {
    this.getData();
  }

  gotoList() {
    this.router.navigate(['employee']);
  }
  statusChange(value: string): void {}
  getStatus(item: any) {
    switch (item?.isActive) {
      case 1:
        return {
          className: 'success',
          label: 'Đang làm',
        };
      case 2:
        return {
          className: 'danger',
          label: 'Đã nghỉ làm',
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

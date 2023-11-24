import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
  {
    path: 'add',
    component: AddEmployeesComponent,
  },
  {
    path: 'detail/:id',
    component: DetailEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}

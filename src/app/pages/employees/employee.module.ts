import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SharedModule } from 'src/app/shared/components/components.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
registerLocaleData(en);
@NgModule({
  declarations: [EmployeeListComponent, AddEmployeesComponent, DetailEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NzTableModule,
    NzCardModule,
    NzToolTipModule,
    SharedModule,
    NzGridModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzSelectModule,
    NzIconModule,
    NzButtonModule,
    NzDatePickerModule,
    NzNotificationModule,
    NzTagModule,
    NzDividerModule,
  ],
  exports: [EmployeeListComponent],
})
export class EmployeeModule {}

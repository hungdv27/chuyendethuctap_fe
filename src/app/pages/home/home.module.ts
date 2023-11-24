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
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
registerLocaleData(en);
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
    NzProgressModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}

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
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
registerLocaleData(en);
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RecruitmentInforRoutingModule } from './recruitment-infor-routing.module';
import { RecruitmentInforComponent } from './recruitment-infor/recruitment-infor.component';
@NgModule({
  declarations: [RecruitmentInforComponent],
  imports: [
    CommonModule,
    RecruitmentInforRoutingModule,
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
    NzTabsModule,
    NzStepsModule,
    NzTimelineModule,
    NzImageModule,
    NzCheckboxModule,
    NzDividerModule,
  ],
  exports: [],
})
export class RecruitmentInforModule {}

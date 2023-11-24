import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentInforComponent } from './recruitment-infor/recruitment-infor.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitmentInforComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitmentInforRoutingModule {}

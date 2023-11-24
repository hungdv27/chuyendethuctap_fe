import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelInformationComponent } from './personnel-information/personnel-information.component';

const routes: Routes = [
  {
    path: '',
    component: PersonnelInformationComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelInformationMRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCandidateListComponent } from './person-candidate-list/person-candidate-list.component';
import { PersonCandidateDetailComponent } from './person-candidate-detail/person-candidate-detail.component';
import { PersonCandidateAddComponent } from './person-candidate-add/person-candidate-add.component';

const routes: Routes = [
  {
    path: '',
    component: PersonCandidateListComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
  {
    path: 'detail/:id',
    component: PersonCandidateDetailComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
  {
    path: 'add',
    component: PersonCandidateAddComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonCandidateRoutingModule {}

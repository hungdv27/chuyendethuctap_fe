import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { InfoCandidateComponent } from './info-candidate/info-candidate.component';
import { ProcessCandidateComponent } from './process-candidate/process-candidate.component';
import { LevelCandidateComponent } from './level-candidate/level-candidate.component';

const routes: Routes = [
  {
    path: ':id',
    component: CandidateListComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
  {
    path: 'info',
    component: InfoCandidateComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
  {
    path: 'process',
    component: ProcessCandidateComponent,
  },
  {
    path: 'level',
    component: LevelCandidateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}

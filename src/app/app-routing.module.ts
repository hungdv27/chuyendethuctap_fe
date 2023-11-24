import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('./pages/organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./pages/employees/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'candidate',
    loadChildren: () =>
      import('./pages/candidate/candidate.module').then(
        (m) => m.CandidateModule
      ),
  },
  {
    path: 'person-candidate',
    loadChildren: () =>
      import('./pages/person-candidate/person-candidate.module').then(
        (m) => m.PersonCandidateModule
      ),
  },
  {
    path: 'personnel-information',
    loadChildren: () =>
      import('./pages/personnel-information/personnel-information.module').then(
        (m) => m.PersonnelInformationModule
      ),
  },
  {
    path: 'recruitment-infor',
    loadChildren: () =>
      import('./pages/recruitment-infor/recruitment-infor.module').then(
        (m) => m.RecruitmentInforModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

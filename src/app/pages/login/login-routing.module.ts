import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from '../register/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // data: {
    //   Breadcrumb: 'Danh sách nhân viên',
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

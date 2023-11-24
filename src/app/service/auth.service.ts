import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIns = new BehaviorSubject<boolean>(false);
  private isLoggedInsSes = new BehaviorSubject<boolean>(false);

  // private isRoles = new BehaviorSubject<boolean>(false);
  private readonly token_name = 'signin';

  loggedIns = this.isLoggedIns.asObservable();
  logSess = this.isLoggedInsSes.asObservable();
  // user!: UserModel;
  // roles = this.isRoles.asObservable();
  get token(): any {
    return localStorage.getItem(this.token_name);
  }
  constructor(private loginService: LoginService) {
    const token = localStorage.getItem('signin');
    this.isLoggedIns.next(!!token);

    const sestionToke = sessionStorage.getItem('signin');
    console.log('sestionToke', sestionToke);
  }
  auth(data: any) {
    return this.loginService.login2(data).pipe(
      tap((responsive: any) => {
        this.isLoggedIns.next(true);
        // this.roles.next(true);

        localStorage.setItem('signin', responsive.token);
        sessionStorage.setItem('signin', responsive.token);
        // localStorage.setItem('status', responsive.status);

        // this.user = this.getUser(responsive.token);
        // this.roles.next(true);
        localStorage.setItem('role', responsive.roles[0].role);
        localStorage.setItem('name', responsive.name);

        sessionStorage.setItem('role', responsive.roles[0].role);
        // localStorage.setItem('role', responsive.role);
      })
    );
  }
  // private getUser(token: string): UserModel {
  //   return JSON.parse(atob(token)) as UserModel;
  // }
}

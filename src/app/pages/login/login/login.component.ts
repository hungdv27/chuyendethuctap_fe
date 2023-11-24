import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/service/login.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  isCollapsed = false;
  validateForm!: UntypedFormGroup;
  des: any;
  // role = localStorage.getItem('role');

  constructor(
    private fb: UntypedFormBuilder,
    private route: Router,
    private notification: NzNotificationService,
    private loginService: AuthService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],

      // remember: [true],
    });
  }
  submitForm(): void {
    const res = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
    };
    console.log('res', res);

    this.loginService.auth(res).subscribe((value) => {
      // console.log(localStorage.getItem('signin'));
      console.log('value', value);
      if (value.token === null) {
        this.notification.blank(
          'Thông báo',
          'Tài khoản hoặc mật khẩu không chính xác hoặc không tồn tại',
          {
            nzStyle: {
              width: '300px',
              marginLeft: '-265px',
              // backgroundColor: 'blue',
            },
            nzClass: 'test-class',
          }
        );
      } else {
        this.route.navigate(['home']);
      }
    });
    // this.route.navigate(['home']);
  }
  register() {
    this.route.navigate(['register']);
  }
}

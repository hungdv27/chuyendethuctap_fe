import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private route: Router,
    private notification: NzNotificationService,
    private singupService: LoginService
  ) {}
  isCollapsed = false;
  validateForm!: UntypedFormGroup;
  des: any;
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      roles: [null, [Validators.required]],
      // remember: [true],
    });
  }
  submitForm(): void {
    const res = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
      roles: [this.validateForm.value.roles],
    };
    console.log('res', res);
    this.singupService.login(res).subscribe((value) => {
      console.log('value', value);
      // if (value.status === 401) {
      // }
      this.route.navigate(['home']);
    });
  }
  register() {
    this.route.navigate(['register']);
  }
}

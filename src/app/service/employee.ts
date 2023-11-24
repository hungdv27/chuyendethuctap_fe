import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient, private auth: AuthService) {}
  token = this.auth.token;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  });
  requestOptions = { headers: this.headers };
  // login(data: any): Observable<string> {
  //   return this.http.post<string>(
  //     `${environment.BASE_API_URI.BASE_SERVICE_API}/api/auth/signup`,
  //     data
  //   );
  // }
  // // dang nhap
  // login2(data: any): Observable<any> {
  //   return this.http.post<string>(
  //     `${environment.BASE_API_URI.BASE_SERVICE_API}/api/auth/signin`,
  //     data
  //   );
  // }
  getData(): Observable<any> {
    return this.http.get<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate-work-experience`,
      this.requestOptions
    );
  }
}

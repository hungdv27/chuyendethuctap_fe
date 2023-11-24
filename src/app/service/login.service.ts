import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient) {}

  login(data: any): Observable<string> {
    return this.http.post<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/auth/signup`,
      data
    );
  }
  // dang nhap
  login2(data: any): Observable<any> {
    return this.http.post<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/auth/signin`,
      data
    );
  }
}

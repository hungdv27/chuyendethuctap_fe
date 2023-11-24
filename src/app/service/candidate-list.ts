import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CandidateListService {
  constructor(public http: HttpClient, private auth: AuthService) { }
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
  getData(
    code: any,
    name: any,
    phone: any,
    mail: any,
    numberOf: any,
    level: any,
    page: any,
    size: any
  ): Observable<any> {
    return this.http.get<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate?level=` +
      level +
      `&fullName=` +
      name +
      `&phone=` +
      phone +
      `&email=` +
      mail + `&candidateCode=` + code +
      `&numberOfExp=` +
      numberOf +
      `&page=` +
      page +
      `&size=` +
      size,
      this.requestOptions
    );
  }
  //http://localhost:18080/api/candidate?level=INTERN&page=1&size=1&numberOfExp=2
  getDataDetail(id: any): Observable<any> {
    return this.http.get<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate/${id}`,
      this.requestOptions
    );
  }
  deleteData(id: any): Observable<any> {
    return this.http.delete<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate/${id}`,
      this.requestOptions
    );
  }
  createData(data: any): Observable<any> {
    return this.http.post<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate`,
      data,
      this.requestOptions
    );
  }
  updateData(id: number, data: any): Observable<any> {
    return this.http.put<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate/${id}`,
      data,
      this.requestOptions
    );
  }
}

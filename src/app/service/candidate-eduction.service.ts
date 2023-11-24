import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CandidateEducationService {
  constructor(public http: HttpClient, private auth: AuthService) {}
  token = this.auth.token;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  });
  requestOptions = { headers: this.headers };

  getData(id: any): Observable<any> {
    return this.http.get<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate-education/` +
        id,
      this.requestOptions
    );
  }
  // getDataDetail(id: any): Observable<any> {
  //   return this.http.get<string>(
  //     `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate/${id}`,
  //     this.requestOptions
  //   );
  // }
  deleteData(id: any): Observable<any> {
    return this.http.delete<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate/${id}`,
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

  createData(data: any): Observable<any> {
    return this.http.post<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate-education`,
      data,
      this.requestOptions
    );
  }

  deleteEdu(id: any): Observable<any> {
    return this.http.delete<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate-education/${id}`,
      this.requestOptions
    );
  }

  updateEdu(id: any, data: any): Observable<any> {
    return this.http.put<string>(
      `${environment.BASE_API_URI.BASE_SERVICE_API}/api/candidate-education/${id}`,
      data,
      this.requestOptions
    );
  }
}

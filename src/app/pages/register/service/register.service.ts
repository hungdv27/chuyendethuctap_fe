// import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Http, Headers, RequestOptions, Response } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthService } from '../../service/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProducerService {
//   constructor(public http: HttpClient, private auth: AuthService) {}
//   token = this.auth.token;
//   headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${this.token}`,
//   });
//   requestOptions = { headers: this.headers };
//   createProducer(data: any): Observable<string> {
//     return this.http.post<string>(
//       `http://localhost:8081/producer/created`,
//       data,
//       this.requestOptions
//     );
//   }
//   // createProduct(data: any): Observable<string> {
//   //   return this.http.post<string>(
//   //     `http://localhost:8081/product/save`,
//   //     data,
//   //     this.requestOptions
//   //   );
//   // }
//   getDataList(): Observable<string> {
//     return this.http.get<string>(
//       `http://localhost:8081/producer/list-producer`,
//       this.requestOptions
//     );
//   }
//   // http://localhost:8081/producer/list-producer
//   // http://localhost:8081/product/search?productId=&productName=&producers=&page=1&size=10
//   // getDetail(id: any): Observable<string> {
//   //   return this.http.get<string>(
//   //     `${environment.BASE_API_URI.BASE_SERVICE_API}` + `/user/findId/` + id,
//   //     this.requestOptions
//   //   );
//   // }

//   // http://localhost:8081/producer/search?producerName&idProducer&page=1&size=10
//   getProducerList(
//     producerName: any,
//     idProducer: any,
//     page: number,
//     size: number
//   ): Observable<string> {
//     return this.http.get<string>(
//       `http://localhost:8081/producer/search?producerName=` +
//         producerName +
//         `&idProducer=` +
//         idProducer +
//         `&page=` +
//         page +
//         `&size=` +
//         size,
//       this.requestOptions
//     );
//   }
// }

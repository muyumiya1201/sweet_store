import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchLibService {

  constructor(private http: HttpClient) { }

  myPostData: any
  myGetData: any

  post(url: string, postData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }
    return this.http.post<any>(url, postData, options);
  }

  get(url: string) {
    return this.http.get<any>(url);
  }
}

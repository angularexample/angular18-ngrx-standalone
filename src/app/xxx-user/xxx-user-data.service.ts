import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {XxxUserApiResponse} from "./xxx-user.types";

@Injectable({
  providedIn: 'root'
})
export class XxxUserDataService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<XxxUserApiResponse> {
    // const url = 'https://dummyjson.com/users/?delay=3000'
    const url = 'https://dummyjson.com/users';
    return this.http.get<XxxUserApiResponse>(url);
  }
}

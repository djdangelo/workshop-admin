import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsersInterface} from "../../interface/users/users.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = `${environment.base_url_api}users`;
  constructor(
    private http: HttpClient,
  ) { }
  private static getHeaders(){
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  getUsers() {
    return this.http.get(this.apiUrl, { headers: UsersService.getHeaders() });
  }
  createUser(data: UsersInterface) {
    return this.http.post(this.apiUrl, data, { headers: UsersService.getHeaders() });
  }
  updateUser(data: UsersInterface, id: number) {
    return this.http.put(`${this.apiUrl}/${id}`, data, { headers: UsersService.getHeaders() });
  }
  getOneUser(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: UsersService.getHeaders() });
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: UsersService.getHeaders() });
  }
}

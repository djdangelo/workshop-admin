import { Injectable } from '@angular/core';
import {UsersInterface} from "../../interface/users/users.interface";
import {UsersService} from "../users/users.service";
import {MessagesAppService} from "../messages-app/messages-app.service";
import {ResponsesInterface} from "../../interface/response-api/response.api.interface";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  listUser!: UsersInterface[];
  totalUser = 0;
  isEmptyUser = false;
  constructor(
    private userService: UsersService,
    private messageAppService: MessagesAppService,
  ) { }
  getUsers() {
    this.userService.getUsers().subscribe(
      (res: ResponsesInterface | any) => {
        this.listUser = res.data;
        this.totalUser = this.listUser.length;
        if (this.listUser.length <= 0) {
          this.isEmptyUser = true;
        }
      },
      error => {
        console.error(error);
        return this.messageAppService.showMessage(error.error.message, 'danger', 'Error');
      }
    );
  }
}

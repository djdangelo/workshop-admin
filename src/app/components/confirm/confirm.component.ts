import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {UsersService} from "../../services/users/users.service";
import {SharedService} from "../../services/shared/shared.service";
import {MessagesAppService} from "../../services/messages-app/messages-app.service";
import {ResponsesInterface} from "../../interface/response-api/response.api.interface";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  textBody!: string;
  fromExecuteDialog!: string;
  id!: number;
  btnDisabled = false;
  constructor(
    protected dialogRef: NbDialogRef<ConfirmComponent>,
    private messageService: MessagesAppService,
    private userService: UsersService,
    private sharedService: SharedService
  ) { }
  closeDialog() {
    this.dialogRef.close();
  }
  submit() {
    this.btnDisabled = true;
    if (this.fromExecuteDialog === 'DeleteUser') {
      this.userService.deleteUser(this.id).subscribe(
        (res: ResponsesInterface | any) => {
          this.btnDisabled = false;
          this.messageService.showMessage(res.message, 'success', 'Informacion');
          this.closeDialog();
          this.sharedService.getUsers();
        },
        error => {
          console.error(error);
          this.btnDisabled = false;
          this.closeDialog();
          return this.messageService.showMessage(error.error.message, 'danger', 'Error');
        }
      );
    }

}}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users/users.service";
import {SharedService} from "../../services/shared/shared.service";
import {MessagesAppService} from "../../services/messages-app/messages-app.service";
import {NbDialogRef} from "@nebular/theme";
import {UsersInterface} from "../../interface/users/users.interface";
import {ResponsesInterface} from "../../interface/response-api/response.api.interface";

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {
  formUser!: FormGroup;
  tyAction = '';
  btnDisabled = false;
  user!: UsersInterface;
  btnLabel = 'Guardar';
  titleForm = 'Agregar nuevo usuario';
  idUser!: number;
  constructor(
    private userService: UsersService,
    public sharedService: SharedService,
    private messageService: MessagesAppService,
    private formBuilder: FormBuilder,
    protected dialogRef: NbDialogRef<FormUsersComponent>,
  ) {
    this.formUser = this.formBuilder.group({
      name: [ '', [ Validators.required ] ],
      phone_number: [ '', [Validators.required] ],
      email: [ '', [ Validators.required ] ],
      description: [ '' ],
    });
  }

  ngOnInit(): void {
    if (this.tyAction === 'update') {
      this.formUser.controls['name'].setValue(this.user.name);
      this.formUser.controls['phone_number'].setValue(this.user.phone_number);
      this.formUser.controls['email'].setValue(this.user.email);
      this.formUser.controls['description'].setValue(this.user.description);
      this.btnLabel = 'Actualizar';
    }
  }
  saveData(data: UsersInterface) {
    this.btnDisabled = true;
    if (this.tyAction === 'create') {
      this.userService.createUser(data).subscribe(
        (res: ResponsesInterface | any) => {
          this.formUser.reset();
          this.btnDisabled = false;
          this.messageService.showMessage(res.message, 'success', 'Informacion');
          this.sharedService.getUsers();
          this.dialogRef.close();
        },
        error => {
          console.error(error);
          this.btnDisabled = false;
          return this.messageService.showMessage(error.error.message, 'danger', 'Error');
        }
      );
      return;
    }
    if (this.tyAction === 'update') {
      this.userService.updateUser(data, this.idUser).subscribe(
        (res: ResponsesInterface | any) => {
          this.formUser.reset();
          this.btnDisabled = false;
          this.messageService.showMessage(res.message, 'success', 'Informacion');
          this.sharedService.getUsers();
          this.dialogRef.close();
        },
        error => {
          console.error(error);
          this.btnDisabled = false;
          return this.messageService.showMessage(error.error.message, 'danger', 'Error');
        }
      );
      return;
    }
  }
  closeDialog() {
      return this.dialogRef.close();
  }
}

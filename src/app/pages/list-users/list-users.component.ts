import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NbDialogService} from "@nebular/theme";
import {SharedService} from "../../services/shared/shared.service";
import {FormUsersComponent} from "../../components/form-users/form-users.component";
import {ConfirmComponent} from "../../components/confirm/confirm.component";
import {UsersInterface} from "../../interface/users/users.interface";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  titlePage = '';
  page = 1;
  searchName!: string;
  key = 'id_user';
  reverse = false;
  constructor(
    private routerActive: ActivatedRoute,
    private dialogService: NbDialogService,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.routerActive.data.subscribe(
      res => this.titlePage = res['title']
    );
    this.sharedService.getUsers();
  }
  // @ts-ignore
  searchByName() {
    if (this.searchName === '') {
      return this.sharedService.getUsers();
    } else {
      this.sharedService.listUser = this.sharedService.listUser.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase());
      });
    }
  }
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  addNewUser() {
    this.dialogService.open(FormUsersComponent, {
      closeOnEsc: false,
      context: { tyAction: 'create' },
      closeOnBackdropClick: false,
    })
  }
  updateUser(data: UsersInterface, id: number) {
    this.dialogService.open(FormUsersComponent, {
      closeOnEsc: false,
      context: { tyAction: 'update', user: data, titleForm: 'Actualizar usuario', idUser: id },
      closeOnBackdropClick: false,
    })
  }
  deleteUser(id: number) {
    this.dialogService.open(ConfirmComponent,{
      closeOnEsc: false,
      context: { id: id, textBody: '¿Estas seguro de eliminar este usuario?', fromExecuteDialog: 'DeleteUser' },
      closeOnBackdropClick: false
    });
  }
}

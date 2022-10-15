import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessagesAppService} from "../../services/messages-app/messages-app.service";
import {NbDialogRef} from "@nebular/theme";
import {NotificationsService} from "../../services/notifications/notifications.service";

@Component({
  selector: 'app-form-auth-socket',
  templateUrl: './form-auth-socket.component.html',
  styleUrls: ['./form-auth-socket.component.scss']
})
export class FormAuthSocketComponent implements OnInit {
  formAuth!: FormGroup;
  btnDisabled = false;
  btnLabel = 'Guardar';
  titleForm = 'Identificate';
  constructor(
    private messageService: MessagesAppService,
    private formBuilder: FormBuilder,
    protected dialogRef: NbDialogRef<FormAuthSocketComponent>,
    private notificationsService: NotificationsService,
  ) {
    this.formAuth = this.formBuilder.group({
      id: [ '', [ Validators.required ] ],
    });
  }

  ngOnInit(): void {
  }

  saveData(data:any) {
    localStorage.setItem('id', data.id);
    this.notificationsService.setupSocketConnection(data.id);
    this.messageService.showMessage(`Bienvenido ${data.id}`, 'success', 'Información');
    this.notificationsService.getPublicNotifications();
    this.notificationsService.getPrivateNotifications();
    this.closeDialog();
  }
  closeDialog() {
    return this.dialogRef.close();
  }
}

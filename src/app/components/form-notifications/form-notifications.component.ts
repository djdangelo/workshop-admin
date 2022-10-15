import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessagesAppService} from "../../services/messages-app/messages-app.service";
import {NbDialogRef} from "@nebular/theme";
import {NotificationsService} from "../../services/notifications/notifications.service";
import {NotificationsInterface} from "../../interface/notifications/notifications.interface";

@Component({
  selector: 'app-form-notifications',
  templateUrl: './form-notifications.component.html',
  styleUrls: ['./form-notifications.component.scss']
})
export class FormNotificationsComponent implements OnInit {
  formNotifications!: FormGroup;
  btnDisabled = false;
  btnLabel = 'Enviar';
  titleForm = 'Formulario de notificaciones';
  tyNotification = '';
  publicNotification!: NotificationsInterface;
  privateNotification!: NotificationsInterface;
  visibleFieldId = true;
  constructor(
    private messageService: MessagesAppService,
    private formBuilder: FormBuilder,
    protected dialogRef: NbDialogRef<FormNotificationsComponent>,
    private notificationsService: NotificationsService,
  ) {
    this.formNotifications = this.formBuilder.group({
      id: [ '' ],
      title: [ '', [ Validators.required ] ],
      bodyContent: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit(): void {
    if (this.tyNotification === 'public') {
      this.visibleFieldId = false;
    }
  }
  sendData(data: any) {
    if (this.tyNotification === 'private') {
      this.privateNotification = {
        title: data.title,
        bodyContent: data.bodyContent
      }
      this.notificationsService.createPrivateNotification(this.privateNotification, data.id);
      this.formNotifications.reset();
      this.closeDialog();
    }
    if (this.tyNotification === 'public') {
      this.publicNotification = {
        title: data.title,
        bodyContent: data.bodyContent
      };
      this.notificationsService.createPublicNotification(this.publicNotification);
      this.formNotifications.reset();
      this.visibleFieldId = true;
      this.closeDialog();
    }
  }
  closeDialog() {
    return this.dialogRef.close();
  }

}

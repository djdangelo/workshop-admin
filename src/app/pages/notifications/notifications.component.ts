import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotificationsService} from "../../services/notifications/notifications.service";
import {NotificationsInterface} from "../../interface/notifications/notifications.interface";
import {SharedService} from "../../services/shared/shared.service";
import {NbDialogService} from "@nebular/theme";
import {FormUsersComponent} from "../../components/form-users/form-users.component";
import {FormAuthSocketComponent} from "../../components/form-auth-socket/form-auth-socket.component";
import {FormNotificationsComponent} from "../../components/form-notifications/form-notifications.component";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  titlePage = '';
  constructor(
    private routerActive: ActivatedRoute,
    public notificationsService: NotificationsService,
    public sharedService: SharedService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
    this.routerActive.data.subscribe(
      res => this.titlePage = res['title']
    );
    const id = this.sharedService.getIsAuth();
    if (id === null) {
      return this.showAuth();
    } else {
      this.notificationsService.setupSocketConnection(id);
      this.getPrivateNotifications();
      this.getPublicNotifications();
    }
  }
  showAuth() {
    this.dialogService.open(FormAuthSocketComponent, {
      closeOnEsc: false,
      closeOnBackdropClick: false,
    });
  }
  createPublicNotification() {
    this.dialogService.open(FormNotificationsComponent, {
      closeOnEsc: false,
      context: { tyNotification: 'public' },
      closeOnBackdropClick: false,
    });
  }
  createPrivateNotification() {
    this.dialogService.open(FormNotificationsComponent, {
      closeOnEsc: false,
      context: { tyNotification: 'private' },
      closeOnBackdropClick: false,
    });
  }
  getPublicNotifications() {
    this.notificationsService.getPublicNotifications();
  }
  getPrivateNotifications() {
    this.notificationsService.getPrivateNotifications();
  }
}

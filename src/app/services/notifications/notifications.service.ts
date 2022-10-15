import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import {NotificationsInterface} from "../../interface/notifications/notifications.interface";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  socket: any;
  publicNotifications:NotificationsInterface[] = [];
  privateNotifications:NotificationsInterface[] = [];
  publicNotiEmpty = true;
  privateNotiEmpty = true;
  constructor(
  ) { }
  setupSocketConnection(id: any) {
    this.socket = io('http://localhost:5000/', { extraHeaders: { 'my-id': `${id}` } });
  }
  getPublicNotifications() {
    this.socket.on('list-notifications', (data: NotificationsInterface) => {
      this.publicNotifications.push(data);
      if (this.publicNotifications.length > 0 ) {
        this.publicNotiEmpty = false;
      }
    });
  }
  getPrivateNotifications() {
    this.socket.on('private-notifications', (data: NotificationsInterface) => {
      this.privateNotifications.push(data);
      if (this.privateNotifications.length > 0 ) {
        this.privateNotiEmpty = false;
      }
    });
  }
  createPublicNotification(data: NotificationsInterface) {
    this.socket.emit('notifications', data);
  }
  createPrivateNotification(data: NotificationsInterface, id: any) {
    let newData = { ...data, id };
    this.socket.emit('private-notifications', newData);
  }
}

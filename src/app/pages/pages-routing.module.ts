import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasePageComponent} from "./base-page/base-page.component";
import {HomeComponent} from "./home/home.component";
import {NoFoundComponent} from "../no-found/no-found.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {NotificationsComponent} from "./notifications/notifications.component";

const routes: Routes = [
  {
    path: '', component: BasePageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'list-users', component: ListUsersComponent, data: { title: 'Lista de usuarios' } },
      { path: 'notifications', component: NotificationsComponent, data: { title: 'Notificaciones - sockets' } },
      { path: '**', component: NoFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

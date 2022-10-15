import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoFoundComponent } from './no-found/no-found.component';
import {NbButtonModule, NbCardModule, NbDialogModule, NbToastrModule} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ThemeModule} from "./theme/theme.module";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {NotificationsService} from "./services/notifications/notifications.service";

const componentsOfNebular = [
  NbCardModule,
  NbButtonModule,
];

const config: SocketIoConfig = { url: 'http://localhost:5000/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    componentsOfNebular,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

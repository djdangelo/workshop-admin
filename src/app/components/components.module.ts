import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbOptionModule,
  NbSelectModule
} from "@nebular/theme";
import { FormUsersComponent } from './form-users/form-users.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    FormUsersComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    ReactiveFormsModule,
    NbOptionModule,
    NbSelectModule,
  ], exports: [
      PageTitleComponent,
      FormUsersComponent
  ]
})
export class ComponentsModule { }

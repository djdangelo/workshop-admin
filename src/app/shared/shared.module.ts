import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {
  NbActionsModule, NbContextMenuModule, NbDialogModule,
  NbIconModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule, NbUserModule
} from "@nebular/theme";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbSelectModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forChild(),
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }

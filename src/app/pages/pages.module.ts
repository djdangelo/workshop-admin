import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {NbButtonModule, NbCardModule, NbIconModule, NbMenuModule, NbTooltipModule} from "@nebular/theme";
import {NgxPaginationModule} from "ngx-pagination";
import {ThemeModule} from "../theme/theme.module";
import {ComponentsModule} from "../components/components.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {FormsModule} from "@angular/forms";
import { BasePageComponent } from './base-page/base-page.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    BasePageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NbButtonModule,
    ComponentsModule,
    FormsModule,
    NbTooltipModule,
    NbIconModule,
  ]
})
export class PagesModule { }
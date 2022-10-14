import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasePageComponent} from "./base-page/base-page.component";
import {HomeComponent} from "./home/home.component";
import {NoFoundComponent} from "../no-found/no-found.component";

const routes: Routes = [
  {
    path: '', component: BasePageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '**', component: NoFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {NbMenuService} from "@nebular/theme";

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent implements OnInit {

  constructor(private menuService: NbMenuService) { }

  ngOnInit(): void {
  }
  goToHome() {
    this.menuService.navigateHome();
  }
}

import { Component, OnInit } from '@angular/core';
import {NbDialogService, NbMenuService, NbSidebarService, NbThemeService} from "@nebular/theme";
import {LayoutService} from "../../services/layout-service/layout.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTheme = 'default';
  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.currentTheme = this.themeService.currentTheme;
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }
  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}

import { Injectable } from '@angular/core';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";

@Injectable({
  providedIn: 'root'
})
export class MessagesAppService {
  positions = NbGlobalPhysicalPosition.TOP_RIGHT;
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  destroyByClick = true;
  duration = 5000;
  hasIcon = true;
  preventDuplicates = false;
  constructor(private toastService: NbToastrService) { }
  showMessage(message: string, status: any, title: string) {
    return this.showToast(status, title, message);
  }
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.positions,
      preventDuplicates: this.preventDuplicates,
    };
    this.toastService.show(body, title, config);
  }
}

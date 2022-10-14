import { Injectable } from '@angular/core';
import {debounceTime, Observable, delay, Subject, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  protected layoutSize$ = new Subject();
  protected layoutSizeChange$ = this.layoutSize$.pipe(
    shareReplay({ refCount: true }),
  );
  changeLayoutSize() {
    // @ts-ignore
    this.layoutSize$.next();
  }
  onChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(delay(1));
  }
  onSafeChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(
      debounceTime(350),
    );
  }
}

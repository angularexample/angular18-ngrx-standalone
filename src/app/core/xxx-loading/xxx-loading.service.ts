import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XxxLoadingService {
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  readonly loading$: Observable<boolean> = this.loadingSubject.asObservable();

  loadingOn(): void {
    this.loadingSubject.next(true);
  }

  loadingOff(): void {
    this.loadingSubject.next(false);
  }
}

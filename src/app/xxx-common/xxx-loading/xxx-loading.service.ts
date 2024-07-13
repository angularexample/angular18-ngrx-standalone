import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class XxxLoadingService {
    private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

    loadingOff() {
        this.loadingSubject.next(false);
    }

    loadingOn() {
        this.loadingSubject.next(true);
    }
}

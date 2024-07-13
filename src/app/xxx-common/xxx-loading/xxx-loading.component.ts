import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Observable,} from "rxjs";
import {XxxLoadingService} from "./xxx-loading.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AsyncPipe,
        MatProgressSpinner,
    ],
    selector: 'xxx-loading',
    standalone: true,
    styleUrl: './xxx-loading.component.scss',
    templateUrl: './xxx-loading.component.html',
})
export class XxxLoadingComponent {
    isLoading$: Observable<boolean>;

    constructor(
        private loadingService: XxxLoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }
}

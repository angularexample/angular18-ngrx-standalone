import {ChangeDetectionStrategy, Component, ContentChild, inject, Input, OnInit, TemplateRef} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {Observable, tap} from "rxjs";
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";
import {XxxLoadingService} from "./xxx-loading.service";

/*
To turn off loading for certain http requests, set the context as in this example
this.http.get("/api/courses", {
  context: new HttpContext().set(SkipLoading, true),
});

To show loading during router route transitions
add the attribute to the loading element as in this example
<xxx-loading [detectRouteTransitions]="true"></xxx-loading>

 To use the http interceptor add this to the app module providers
     {
      provide: HTTP_INTERCEPTORS,
      useClass: XxxLoadingInterceptor,
      multi: true,
    },
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AsyncPipe,
        MatProgressSpinner,
        NgTemplateOutlet,
    ],
    selector: 'xxx-loading',
    standalone: true,
    styleUrl: './xxx-loading.component.scss',
    templateUrl: './xxx-loading.component.html',
})
export class XxxLoadingComponent implements OnInit {
    private loadingService: XxxLoadingService = inject(XxxLoadingService);
    private router: Router = inject(Router);
    @ContentChild("loading") customLoadingIndicator: TemplateRef<any> | null = null;
    @Input() detectRouteTransitions = false;
    loading$: Observable<boolean>;

    constructor() {
        this.loading$ = this.loadingService.loading$;
    }

    ngOnInit() {
        if (this.detectRouteTransitions) {
            this.router.events
                .pipe(
                    tap((event) => {
                        if (event instanceof RouteConfigLoadStart) {
                            this.loadingService.loadingOn();
                        } else if (event instanceof RouteConfigLoadEnd) {
                            this.loadingService.loadingOff();
                        }
                    })
                )
                .subscribe();
        }
    }
}

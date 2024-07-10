import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
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
  selector: 'xxx-loading',
  templateUrl: './xxx-loading.component.html',
  styleUrl: './xxx-loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxLoadingComponent implements OnInit {
  @ContentChild("loading") customLoadingIndicator: TemplateRef<any> | null = null;
  @Input() detectRouteTransitions = false;
  loading$: Observable<boolean>;

  constructor(
    private loadingService: XxxLoadingService,
    private router: Router) {
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

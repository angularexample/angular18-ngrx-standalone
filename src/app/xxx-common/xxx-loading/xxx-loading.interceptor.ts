import {XxxLoadingService} from "./xxx-loading.service";
import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";

export const SkipLoading =
    new HttpContextToken<boolean>(() => false);

@Injectable()
export class XxxLoadingInterceptor
    implements HttpInterceptor {
    private loadingService: XxxLoadingService = inject(XxxLoadingService);

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Check for a custom attribute
        // to avoid showing loading spinner
        if (req.context.get(SkipLoading)) {
            // Pass the request directly to the next handler
            return next.handle(req);
        }

        // Turn on the loading spinner
        this.loadingService.loadingOn();

        return next.handle(req).pipe(
            finalize(() => {
                // Turn off the loading spinner
                this.loadingService.loadingOff();
            })
        );
    }
}

import {enableProdMode, importProvidersFrom, isDevMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {provideAnimations} from '@angular/platform-browser/animations';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/xxx-home/xxx-home.module').then(m => m.XxxHomeModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./app/xxx-user/xxx-user.module').then(m => m.XxxUserModule)
    },
    {
        path: 'post',
        loadChildren: () => import('./app/xxx-post/xxx-post.module').then(m => m.XxxPostModule)
    }
];

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            EffectsModule.forRoot([]),
            StoreModule.forRoot({}, {}),
            StoreDevtoolsModule.instrument({
                maxAge: 25, // Retains last 25 states
                logOnly: !isDevMode(), // Restrict extension to log-only mode
                autoPause: true, // Pauses recording actions and state changes when the extension window is not open
                trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
                traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
                connectInZone: true // If set to true, the connection is established within the Angular zone
            })),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(routes)
    ]
})
    .catch(err => console.error(err));

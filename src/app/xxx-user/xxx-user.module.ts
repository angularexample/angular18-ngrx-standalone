import {AsyncPipe} from "@angular/common";
import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {XxxUserComponent} from "./xxx-user.component";
import {XxxUserRoutingModule} from "./xxx-user-routing.module";
import {XxxUserStateModule} from "./xxx-user.state.module";

@NgModule({
    imports: [
        AsyncPipe,
        XxxUserRoutingModule,
        XxxUserStateModule,
        XxxUserComponent,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class XxxUserModule {
}

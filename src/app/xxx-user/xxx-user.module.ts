import {AsyncPipe} from "@angular/common";
import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {XxxCommonModule} from "../xxx-common/xxx-common.module";
import {XxxUserComponent} from "./xxx-user.component";
import {XxxUserRoutingModule} from "./xxx-user-routing.module";
import {XxxUserStateModule} from "./xxx-user.state.module";

@NgModule({
  declarations: [XxxUserComponent],
  imports: [
    AsyncPipe,
    XxxCommonModule,
    XxxUserRoutingModule,
    XxxUserStateModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class XxxUserModule {
}

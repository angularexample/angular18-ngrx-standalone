import {AsyncPipe} from "@angular/common";
import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {XxxCommonModule} from "../xxx-common/xxx-common.module";
import {XxxPostEditComponent} from "./xxx-post-edit/xxx-post-edit.component";
import {XxxPostComponent} from "./xxx-post.component";
import {XxxPostStateModule} from "./xxx-post.state.module";
import {XxxPostRoutingModule} from "./xxx-post-routing.module";

@NgModule({
  declarations: [
    XxxPostComponent,
    XxxPostEditComponent
  ],
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    XxxCommonModule,
    XxxPostStateModule,
    XxxPostRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class XxxPostModule {
}

import {AsyncPipe, NgIf} from "@angular/common";
import {NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {XxxCommonModule} from "../xxx-common/xxx-common.module";
import {XxxHomeComponent} from "./xxx-home.component";
import {XxxHomeRoutingModule} from "./xxx-home-routing.module";

@NgModule({
  declarations: [XxxHomeComponent],
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink,
    RouterLinkActive,
    XxxCommonModule,
    XxxHomeRoutingModule,
  ],
  exports: [XxxHomeComponent]
})
export class XxxHomeModule {
}

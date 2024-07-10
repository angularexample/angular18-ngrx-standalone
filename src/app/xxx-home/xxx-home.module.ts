import {AsyncPipe, NgIf} from "@angular/common";
import {NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {XxxHomeComponent} from "./xxx-home.component";
import {XxxHomeRoutingModule} from "./xxx-home-routing.module";
import {XxxContentModule} from "../xxx-common/xxx-content/xxx-content.module";

@NgModule({
    imports: [
        AsyncPipe,
        NgIf,
        RouterLink,
        RouterLinkActive,
        XxxHomeRoutingModule,
        XxxHomeComponent,
        XxxContentModule
    ],
    exports: [XxxHomeComponent]
})
export class XxxHomeModule {
}

import { NgModule } from '@angular/core';
import {XxxHeaderComponent} from "./xxx-header.component";
import {RouterLinkActive, RouterLink} from "@angular/router";


@NgModule({
    declarations: [XxxHeaderComponent],
  imports: [
    RouterLink,
    RouterLinkActive
  ],
    exports: [
        XxxHeaderComponent
    ]
})
export class XxxHeaderModule { }

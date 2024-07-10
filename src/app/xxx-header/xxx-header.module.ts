import { NgModule } from '@angular/core';
import {XxxHeaderComponent} from "./xxx-header.component";
import {RouterLinkActive, RouterLink} from "@angular/router";


@NgModule({
    imports: [
        RouterLink,
        RouterLinkActive,
        XxxHeaderComponent
    ],
    exports: [
        XxxHeaderComponent
    ]
})
export class XxxHeaderModule { }

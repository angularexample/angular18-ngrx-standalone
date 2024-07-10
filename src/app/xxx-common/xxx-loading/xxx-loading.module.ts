import {NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {XxxLoadingComponent} from "./xxx-loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        RouterLink,
        RouterLinkActive,
        XxxLoadingComponent
    ],
    exports: [
        XxxLoadingComponent
    ]
})
export class XxxLoadingModule {
}

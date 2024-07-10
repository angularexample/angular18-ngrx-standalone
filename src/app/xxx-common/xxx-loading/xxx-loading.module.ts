import {NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {XxxLoadingComponent} from "./xxx-loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [XxxLoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    XxxLoadingComponent
  ]
})
export class XxxLoadingModule {
}

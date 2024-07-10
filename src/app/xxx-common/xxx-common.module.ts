import {NgModule} from '@angular/core';
import {XxxAlertModule} from "./xxx-alert/xxx-alert.module";
import {XxxContentComponent} from "./xxx-content/xxx-content.component";
import {XxxContentModule} from "./xxx-content/xxx-content.module";
import {XxxLoadingComponent} from "./xxx-loading/xxx-loading.component";
import {XxxLoadingModule} from "./xxx-loading/xxx-loading.module";

@NgModule({
  exports: [
    XxxContentComponent,
    XxxLoadingComponent
  ],
  imports: [
    XxxAlertModule,
    XxxContentModule,
    XxxLoadingModule
  ]
})
export class XxxCommonModule {
}

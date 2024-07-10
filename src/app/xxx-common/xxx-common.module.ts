import {NgModule} from '@angular/core';

import {XxxContentComponent} from "./xxx-content/xxx-content.component";
import {XxxContentModule} from "./xxx-content/xxx-content.module";
import {XxxLoadingComponent} from "./xxx-loading/xxx-loading.component";


@NgModule({
  exports: [
    XxxContentComponent,
    XxxLoadingComponent
  ],
  imports: [
    XxxContentModule
]
})
export class XxxCommonModule {
}

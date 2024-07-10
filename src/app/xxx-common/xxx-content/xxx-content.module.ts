import {AsyncPipe} from "@angular/common";
import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {XxxContentComponent} from "./xxx-content.component";
import {XxxContentStateModule} from "./xxx-content.state.module";

@NgModule({
    exports: [XxxContentComponent],
    imports: [
        AsyncPipe,
        XxxContentStateModule,
        XxxContentComponent
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class XxxContentModule {
}

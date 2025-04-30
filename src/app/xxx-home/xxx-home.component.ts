import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {XxxContent} from "../xxx-common/xxx-content/xxx-content.types";
import {XxxContentFacadeService} from "../xxx-common/xxx-content/xxx-content-facade.service";
import {AsyncPipe} from '@angular/common';
import {XxxContentComponent} from '../xxx-common/xxx-content/xxx-content.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AsyncPipe,
        XxxContentComponent,
    ],
    selector: 'xxx-home',
    standalone: true,
    templateUrl: './xxx-home.component.html',
})
export class XxxHomeComponent {
    private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
    contentKey = 'home';
    content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);

    constructor() {
        this.contentFacade.getContent(this.contentKey);
    }
}

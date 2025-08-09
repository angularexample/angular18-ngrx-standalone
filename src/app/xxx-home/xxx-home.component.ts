import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { XxxContent } from "../xxx-common/xxx-content/xxx-content.types";
import { XxxContentComponent } from '../xxx-common/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from "../xxx-common/xxx-content/xxx-content-facade.service";
import { XxxSanitizePipe } from '../xxx-common/xxx-sanitize/xxx-sanitize.pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    XxxContentComponent,
    XxxSanitizePipe,
  ],
  selector: 'xxx-home',
  standalone: true,
  templateUrl: './xxx-home.component.html',
})
export class XxxHomeComponent {
  contentKey = 'home';
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);

  constructor() {
    this.contentFacade.getContent(this.contentKey);
  }
}

import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { XxxContent } from '../../core/xxx-content/xxx-content.types';
import { XxxContentComponent } from '../../core/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from '../../core/xxx-content/xxx-content-facade.service';
import { XxxSanitizePipe } from '../../core/xxx-sanitize/xxx-sanitize.pipe';

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
  protected readonly contentKey = 'home';
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
}

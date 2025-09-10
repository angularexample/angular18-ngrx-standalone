import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { XxxContent } from '../../core/xxx-content/xxx-content.types';
import { XxxContentComponent } from '../../core/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from '../../core/xxx-content/xxx-content-facade.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterLink, XxxContentComponent],
  selector: 'xxx-header',
  standalone: true,
  styleUrl: './xxx-header.component.scss',
  templateUrl: './xxx-header.component.html',
})
export class XxxHeaderComponent {
  protected readonly contentKey: string = 'header';
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
}

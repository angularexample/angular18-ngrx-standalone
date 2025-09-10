import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { XxxContentFacadeService } from './xxx-content-facade.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  selector: 'xxx-content',
  standalone: true,
  styleUrl: './xxx-content.component.scss',
  templateUrl: './xxx-content.component.html',
})
export class XxxContentComponent implements OnInit {
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  @Input({required: true}) contentKey!: string;
  protected readonly contentErrorMessage$: Observable<string> = this.contentFacade.errorMessage$(this.contentKey);
  protected readonly isContentEmpty$: Observable<boolean> | undefined = this.contentFacade.isContentEmpty$(this.contentKey);
  protected readonly isContentError$: Observable<boolean> | undefined= this.contentFacade.isContentError$(this.contentKey);
  protected readonly isContentLoading$: Observable<boolean> | undefined= this.contentFacade.isContentLoading$(this.contentKey);

  ngOnInit(): void {
    this.contentFacade.showContent(this.contentKey);
  }
}

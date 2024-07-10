import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {XxxContentFacadeService} from "./xxx-content-facade.service";

@Component({
  selector: 'xxx-content',
  templateUrl: './xxx-content.component.html',
  styleUrl: './xxx-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxContentComponent implements OnInit {
  @Input({ required: true }) contentKey!: string;
  isContentEmpty$: Observable<boolean> | undefined;
  isContentError$: Observable<boolean> | undefined;
  isContentLoading$: Observable<boolean> | undefined;

  constructor(private contentFacade: XxxContentFacadeService) {}

  ngOnInit(): void {
    this.isContentEmpty$ = this.contentFacade.isContentEmpty$(this.contentKey);
    this.isContentError$ = this.contentFacade.isContentError$(this.contentKey);
    this.isContentLoading$ = this.contentFacade.isContentLoading$(this.contentKey);
  }
}

import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {XxxContentFacadeService} from "./xxx-content-facade.service";

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
    isContentEmpty$: Observable<boolean> | undefined;
    isContentError$: Observable<boolean> | undefined;
    isContentLoading$: Observable<boolean> | undefined;

    ngOnInit(): void {
        this.isContentEmpty$ = this.contentFacade.isContentEmpty$(this.contentKey);
        this.isContentError$ = this.contentFacade.isContentError$(this.contentKey);
        this.isContentLoading$ = this.contentFacade.isContentLoading$(this.contentKey);
    }
}

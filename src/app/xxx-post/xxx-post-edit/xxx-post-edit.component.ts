import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable} from "rxjs";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {XxxContent} from "../../xxx-common/xxx-content/xxx-content.types";
import {XxxContentComponent} from '../../xxx-common/xxx-content/xxx-content.component';
import {XxxContentFacadeService} from "../../xxx-common/xxx-content/xxx-content-facade.service";
import {XxxPost, xxxPostFormDataInitial} from "../xxx-post.types";
import {XxxPostFacadeService} from "../xxx-post-facade.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        XxxContentComponent,
    ],
    selector: 'xxx-post-edit',
    standalone: true,
    templateUrl: './xxx-post-edit.component.html',
})
export class XxxPostEditComponent {
    contentKey: string = 'post-edit';
    content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
    isNoSelectedPost$: Observable<boolean> = this.postFacade.isNoSelectedPost$;
    isSaveButtonDisabled$: Observable<boolean> = this.postFacade.isSaveButtonDisabled$;
    postForm: FormGroup = new FormGroup({
        body: new FormControl(xxxPostFormDataInitial.body, Validators.required),
        id: new FormControl(xxxPostFormDataInitial.id),
        title: new FormControl(xxxPostFormDataInitial.title, Validators.required),
        userId: new FormControl(xxxPostFormDataInitial.userId)
    });
    selectedPost$: Observable<XxxPost | undefined> = this.postFacade.selectedPost$;

    constructor(
        private contentFacade: XxxContentFacadeService,
        private postFacade: XxxPostFacadeService
    ) {
        this.contentFacade.getContent(this.contentKey)
        this.loadFormData();
        this.subscribeToFormChanges();
    }

    onSubmit() {
        this.postFacade.updatePost();
    }

    private loadFormData(): void {
        this.selectedPost$.pipe(
            takeUntilDestroyed(),
        ).subscribe((post: XxxPost | undefined): void => {
            if (post !== undefined) {
                this.postForm.setValue(post);
            }
        })
    }

    private subscribeToFormChanges(): void {
        this.postForm.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            takeUntilDestroyed(),
        ).subscribe(value => {
            this.postFacade.setPostForm(value);
        });
    }
}

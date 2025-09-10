import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { XxxContent } from '../../../core/xxx-content/xxx-content.types';
import { XxxContentComponent } from '../../../core/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from '../../../core/xxx-content/xxx-content-facade.service';
import { XxxPost, xxxPostFormDataInitial } from '../xxx-post.types';
import { XxxPostFacadeService } from '../xxx-post-facade.service';

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
  protected readonly contentKey: string = 'post-edit';
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  protected readonly isNoSelectedPost$: Observable<boolean> = this.postFacade.isNoSelectedPost$;
  protected readonly isSaveButtonDisabled$: Observable<boolean> = this.postFacade.isSaveButtonDisabled$;
  protected readonly postForm: FormGroup = new FormGroup({
    body: new FormControl(xxxPostFormDataInitial.body, Validators.required),
    id: new FormControl(xxxPostFormDataInitial.id),
    title: new FormControl(xxxPostFormDataInitial.title, Validators.required),
    userId: new FormControl(xxxPostFormDataInitial.userId)
  });
  protected readonly selectedPost$: Observable<XxxPost | undefined> = this.postFacade.selectedPost$;

  constructor(
    private contentFacade: XxxContentFacadeService,
    private postFacade: XxxPostFacadeService
  ) {
    this.loadFormData();
    this.subscribeToFormChanges();
  }

  protected onSubmit() {
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

import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { XxxContent } from '../../core/xxx-content/xxx-content.types';
import { XxxContentComponent } from '../../core/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from '../../core/xxx-content/xxx-content-facade.service';
import { XxxPost } from './xxx-post.types';
import { XxxPostFacadeService } from './xxx-post-facade.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    XxxContentComponent,
  ],
  selector: 'xxx-post',
  standalone: true,
  templateUrl: './xxx-post.component.html',
})
export class XxxPostComponent {
  protected readonly contentKey: string = 'post';
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  private postFacade: XxxPostFacadeService = inject(XxxPostFacadeService);
  protected readonly isNoSelectedUser$: Observable<boolean> = this.postFacade.isNoSelectedUser$;
  protected readonly isPostsEmpty$: Observable<boolean> = this.postFacade.isPostsEmpty$;
  protected readonly isPostsLoaded$: Observable<boolean> = this.postFacade.isPostsLoaded$;
  protected readonly isPostsLoading$: Observable<boolean> = this.postFacade.isPostsLoading$;
  protected readonly posts$: Observable<XxxPost[]> = this.postFacade.posts$;
  protected readonly selectedPostId$: Observable<number | undefined> = this.postFacade.selectedPostId$;
  protected readonly selectedUserId$: Observable<number | undefined> = this.postFacade.selectedUserId$;

  constructor() {
    this.postFacade.showUserPosts();
  }

  protected selectPost(post: XxxPost): void {
    this.postFacade.setSelectedPost(post.id);
  }
}

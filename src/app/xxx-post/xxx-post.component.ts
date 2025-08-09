import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { XxxContent } from "../xxx-common/xxx-content/xxx-content.types";
import { XxxContentComponent } from '../xxx-common/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from "../xxx-common/xxx-content/xxx-content-facade.service";
import { XxxPost } from "./xxx-post.types";
import { XxxPostFacadeService } from "./xxx-post-facade.service";

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

  constructor() {
    this.contentFacade.getContent(this.contentKey)
    this.postFacade.getUserPosts();
  }

  protected selectPost(post: XxxPost): void {
    this.postFacade.selectPost(post.id);
  }
}

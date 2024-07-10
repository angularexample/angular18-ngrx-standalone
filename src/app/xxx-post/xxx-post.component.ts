import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxPost} from "./xxx-post.types";
import {XxxPostFacadeService} from "./xxx-post-facade.service";
import {XxxContentFacadeService} from "../xxx-common/xxx-content/xxx-content-facade.service";
import {XxxContent} from "../xxx-common/xxx-content/xxx-content.types";

@Component({
  selector: 'xxx-post',
  templateUrl: './xxx-post.component.html',
  styleUrl: './xxx-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxPostComponent {
  contentKey: string = 'post';
  content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  isNoSelectedUser$: Observable<boolean> = this.postFacade.isNoSelectedUser$;
  isPostsEmpty$: Observable<boolean> = this.postFacade.isPostsEmpty$;
  isPostsLoaded$: Observable<boolean> = this.postFacade.isPostsLoaded$;
  isPostsLoading$: Observable<boolean> = this.postFacade.isPostsLoading$;
  posts$: Observable<XxxPost[]> = this.postFacade.posts$;
  selectedPostId$: Observable<number | undefined> = this.postFacade.selectedPostId$;

  constructor(
    private contentFacade: XxxContentFacadeService,
    private postFacade: XxxPostFacadeService
  ) {
    this.contentFacade.getContent(this.contentKey)
    this.postFacade.getUserPosts();
  }

  selectPost(post: XxxPost) {
    this.postFacade.selectPost(post.id);
  }
}

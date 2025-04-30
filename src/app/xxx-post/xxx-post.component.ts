import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {XxxContent} from "../xxx-common/xxx-content/xxx-content.types";
import {XxxContentComponent} from '../xxx-common/xxx-content/xxx-content.component';
import {XxxContentFacadeService} from "../xxx-common/xxx-content/xxx-content-facade.service";
import {XxxPost} from "./xxx-post.types";
import {XxxPostFacadeService} from "./xxx-post-facade.service";

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
    contentKey: string = 'post';
    private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
    content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
    private postFacade: XxxPostFacadeService = inject(XxxPostFacadeService);
    isNoSelectedUser$: Observable<boolean> = this.postFacade.isNoSelectedUser$;
    isPostsEmpty$: Observable<boolean> = this.postFacade.isPostsEmpty$;
    isPostsLoaded$: Observable<boolean> = this.postFacade.isPostsLoaded$;
    isPostsLoading$: Observable<boolean> = this.postFacade.isPostsLoading$;
    posts$: Observable<XxxPost[]> = this.postFacade.posts$;
    selectedPostId$: Observable<number | undefined> = this.postFacade.selectedPostId$;

    constructor() {
        this.contentFacade.getContent(this.contentKey)
        this.postFacade.getUserPosts();
    }

    selectPost(post: XxxPost) {
        this.postFacade.selectPost(post.id);
    }
}

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { concatLatestFrom } from '@ngrx/operators';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { XxxAlertService } from '../../core/xxx-alert/xxx-alert.service';
import { XxxPost } from './xxx-post.types';
import { XxxPostActions } from './xxx-post.actions';
import { XxxPostDataService } from './xxx-post-data.service';
import * as XxxPostSelectors from './xxx-post.selectors';
import * as XxxUserSelectors from '../xxx-user/xxx-user.selectors';

@Injectable()
export class XxxPostEffects {
  private actions$: Actions = inject(Actions);
  private router: Router = inject(Router);
  private store: Store = inject(Store);
  private xxxAlertService: XxxAlertService = inject(XxxAlertService);
  private xxxPostDataService: XxxPostDataService = inject(XxxPostDataService);

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxPostActions.getPosts),
      concatLatestFrom(() => this.store.select(XxxPostSelectors.selectSelectedUserId)),
      map(([_arg1, arg2]) => arg2),
      filter((userId: number | undefined) => userId !== undefined),
      switchMap((userId: number | undefined) => {
        if (userId !== undefined) {
          return this.xxxPostDataService.getPosts(userId).pipe(
            map((posts: XxxPost[]) => XxxPostActions.getPostsSuccess({posts})),
            catchError(() => of(XxxPostActions.getPostsError()))
          )
        } else {
          return of(XxxPostActions.getPostsError())
        }
      })
    ));

  getPostsError$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.getPostsError),
      tap(() => {
        this.xxxAlertService.showError('Error occurred getting posts');
      })
    ), {dispatch: false}
  );

  setSelectedPost$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.setSelectedPost),
      tap(() => {
        void this.router.navigateByUrl('/post/edit')
      })
    ), {dispatch: false}
  );

  setSelectedUser$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.setSelectedUser),
      map(() => XxxPostActions.getPosts())
    )
  );

  // Logic to show user posts
  // 1. If posts are loaded and the user id in the Post state is the same as the user id
  //    in the User state, then do nothing
  // 2. If the user ids in each state are different,
  //    then set the user id in the Post state to the selected user id
  // 3. In any other case, then get the user posts
  showPosts$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.showPosts),
      concatLatestFrom(() => [
          this.store.select(XxxPostSelectors.selectIsPostsLoaded),
          this.store.select(XxxPostSelectors.selectSelectedUserId),
          this.store.select(XxxUserSelectors.selectSelectedUserId)
        ]
      ),
      map(([_arg1, arg2, arg3, arg4]) => [arg2, arg3, arg4] as [boolean, number | undefined, number | undefined]),
      filter(([isPostsLoaded, postUserId, userUserId]: [boolean, number | undefined, number | undefined]) =>
        (userUserId !== undefined && !(isPostsLoaded && postUserId === userUserId))),
      map(([_isPostsLoaded, postUserId, userUserId]: [boolean, number | undefined, number | undefined]) => {
        if (userUserId !== undefined && userUserId !== postUserId) {
          return XxxPostActions.setSelectedUser({userId: userUserId})
            ;
        }
        return XxxPostActions.getPosts()
      })
    )
  );

  updatePosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxPostActions.updatePost),
      concatLatestFrom(() => this.store.select(XxxPostSelectors.selectPostForm)),
      map(([_arg1, arg2]) => arg2),
      switchMap((post: XxxPost | undefined) => {
        if (post !== undefined) {
          return this.xxxPostDataService.updatePost(post).pipe(
            map((postResponse: XxxPost) => XxxPostActions.updatePostSuccess({postResponse})),
            catchError(() => of(XxxPostActions.updatePostError()))
          )
        } else {
          return of(XxxPostActions.updatePostError())
        }
      })
    ));

  updatePostError$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.updatePostError),
      tap(() => {
        this.xxxAlertService.showError('Error occurred. Unable to update post');
      })
    ), {dispatch: false}
  );

  updatePostSuccess$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.updatePostSuccess),
      tap(() => {
        this.xxxAlertService.showInfo('Successfully updated post');
        void this.router.navigateByUrl('/post')
      })
    ), {dispatch: false}
  );
}

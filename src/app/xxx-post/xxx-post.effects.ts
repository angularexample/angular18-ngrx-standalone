import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, filter, map, of, switchMap, tap} from 'rxjs';
import {concatLatestFrom} from '@ngrx/operators';
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {XxxAlertService} from "../xxx-common/xxx-alert/xxx-alert.service";
import {XxxPost, XxxPostResponse} from "./xxx-post.types";
import * as XxxPostActions from './xxx-post.actions';
import {XxxPostDataService} from "./xxx-post-data.service";
import * as XxxPostSelectors from './xxx-post.selectors';

@Injectable()
export class XxxPostEffects {

  getUserPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxPostActions.getUserPosts),
      concatLatestFrom(() => this.store.select(XxxPostSelectors.selectSelectedUserId)),
      map(([_arg1, arg2]) => arg2),
      switchMap((userId: number | undefined) => {
        if (userId !== undefined) {
          return this.xxxPostDataService.getUserPosts(userId).pipe(
            map((posts: XxxPost[]) => XxxPostActions.getUserPostsSuccess({posts})),
            catchError(() => of(XxxPostActions.getUserPostsError()))
          )
        } else {
          return of(XxxPostActions.getUserPostsError())
        }
      })
    ));

  getUserPostsError$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.getUserPostsError),
      tap(() => {
        this.xxxAlertService.showError('Error occurred getting posts');
      })
    ), {dispatch: false}
  );

  selectPost$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.selectPost),
      tap(() => {
        this.router.navigateByUrl('/post/edit')
      })
    ), {dispatch: false}
  );

  updatePosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxPostActions.updatePost),
      concatLatestFrom(() => this.store.select(XxxPostSelectors.selectPostForm)),
      map(([_arg1, arg2]) => arg2),
      switchMap((post: XxxPost | undefined) => {
        if (post !== undefined) {
          return this.xxxPostDataService.updatePost(post).pipe(
            map((postResponse: XxxPostResponse) => XxxPostActions.updatePostSuccess({postResponse})),
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
        this.router.navigateByUrl('/post')
      })
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private xxxAlertService: XxxAlertService,
    private xxxPostDataService: XxxPostDataService
  ) {
  }
}

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { concatLatestFrom } from '@ngrx/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { XxxContent } from './xxx-content.types';
import { XxxContentActions } from './xxx-content.actions';
import * as XxxContentSelectors from './xxx-content.selectors';
import { XxxContentService } from './xxx-content.service';

@Injectable()
export class XxxContentEffects {
  private actions$: Actions = inject(Actions);
  private contentService: XxxContentService = inject(XxxContentService);
  private store: Store = inject(Store);

  showContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxContentActions.showContent),
      concatLatestFrom((action: {
        key: string
      }) => this.store.select(XxxContentSelectors.selectIsContentLoaded(action.key))),
      filter(([_action, isLoaded]) => !isLoaded),
      map(([arg1, _arg2]) => arg1),
      map((action: { key: string }) => XxxContentActions.getContent({key: action.key}))
    ));

  getContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxContentActions.getContent),
      switchMap((action: { key: string }) =>
        this.contentService.getContent(action.key).pipe(
          map((response: XxxContent) => XxxContentActions.getContentSuccess({content: response})),
          catchError((err: HttpErrorResponse) => of(XxxContentActions.getContentError({key: action.key, err})))
        )
      )
    ));
}

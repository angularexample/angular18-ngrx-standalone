import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, filter, map, of, switchMap} from 'rxjs';
import {concatLatestFrom} from "@ngrx/operators";
import {Store} from "@ngrx/store";
import {XxxContentService} from "./xxx-content.service";
import * as XxxContentActions from './xxx-content.actions';
import * as XxxContentSelectors from "./xxx-content.selectors";
import {XxxContent} from "./xxx-content.types";

@Injectable()
export class XxxContentEffects {

  getContent$ = createEffect(() =>
    this.actions$.pipe(
    ofType(XxxContentActions.getContent),
      switchMap((action: {key: string} ) =>
      this.contentService.getContent(action.key).pipe(
        map((response: XxxContent) => XxxContentActions.getContentSuccess({content: response})),
        catchError(() => of(XxxContentActions.getContentError({key: action.key})))
      )
    )
  ));

  showContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxContentActions.showContent),
      concatLatestFrom((action: {key: string}) => this.store.select(XxxContentSelectors.selectIsContentLoaded(action.key))),
      filter(([_action, isLoaded]) => !isLoaded),
      map(([arg1, _arg2]) => arg1),
      map((action : {key: string}) => XxxContentActions.getContent({key: action.key}))
    ));

  constructor(
    private actions$: Actions,
    private store: Store,
    private contentService: XxxContentService
  ) {
  }
}

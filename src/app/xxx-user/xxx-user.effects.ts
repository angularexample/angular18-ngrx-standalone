import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, filter, map, of, switchMap, tap} from 'rxjs';
import {concatLatestFrom} from "@ngrx/operators";
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {XxxAlertService} from "../xxx-common/xxx-alert/xxx-alert.service";
import * as XxxUserActions from './xxx-user.actions';
import {XxxUserApiResponse} from "./xxx-user.types";
import {XxxUserDataService} from "./xxx-user-data.service";
import * as XxxUserSelectors from "../xxx-user/xxx-user.selectors";
import {XxxLoadingService} from "../xxx-common/xxx-loading/xxx-loading.service";

@Injectable()
export class XxxUserEffects {

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxUserActions.getUsers),
      tap(() => {
        this.loadingService.loadingOn()
      }),
      switchMap(() =>
        this.userDataService.getUsers().pipe(
          map((response: XxxUserApiResponse) => XxxUserActions.getUsersSuccess({payload: response})),
          catchError(() => of(XxxUserActions.getUsersError()))
        )
      )
    ));

  getUsersError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxUserActions.getUsersError),
      tap(() => {
        this.loadingService.loadingOff();
        this.alertService.showError('Error occurred while fetching users.');
      }),
    ), {dispatch: false});

  getUsersSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxUserActions.getUsersSuccess),
      tap(() => {
        this.loadingService.loadingOff()
      }),
    ), {dispatch: false});

  selectUser$ = createEffect(() => this.actions$.pipe(
      ofType(XxxUserActions.selectUser),
      tap(() => {
        this.router.navigateByUrl('/post')
      })
    ), {dispatch: false}
  );

  showUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxUserActions.showUsers),
      concatLatestFrom(() => this.store.select(XxxUserSelectors.selectIsUsersLoaded)),
      map(([_arg1, arg2]) => arg2),
      filter((isUsersLoaded: boolean) => !isUsersLoaded),
      map(() => XxxUserActions.getUsers())
    ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private alertService: XxxAlertService,
    private loadingService: XxxLoadingService,
    private userDataService: XxxUserDataService,
  ) {
  }
}

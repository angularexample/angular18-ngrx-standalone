import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {XxxUser} from "./xxx-user.types";
import {Store} from "@ngrx/store";
import * as XxxUserActions from './xxx-user.actions';
import * as XxxUserSelectors from './xxx-user.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxUserFacadeService {
  isUsersEmpty$: Observable<boolean> = this.store.select(XxxUserSelectors.selectIsUsersEmpty);
  isUsersLoaded$: Observable<boolean> = this.store.select(XxxUserSelectors.selectIsUsersLoaded);
  isUsersLoading$: Observable<boolean> = this.store.select(XxxUserSelectors.selectIsUsersLoading);
  selectedUserId$: Observable<number | undefined> = this.store.select(XxxUserSelectors.selectSelectedUserId);
  users$: Observable<XxxUser[]> = this.store.select(XxxUserSelectors.selectUsers);

  constructor(private store: Store) {
  }

  dispatchShowUsers(): void {
    this.store.dispatch(XxxUserActions.showUsers())
  }

  dispatchSelectUser(userId: number): void {
    this.store.dispatch(XxxUserActions.selectUser({userId}))
  }
}

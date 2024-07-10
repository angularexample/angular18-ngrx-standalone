import {Injectable} from '@angular/core';
import {Observable, skip} from "rxjs";
import {Store} from "@ngrx/store";
import * as XxxContentActions from './xxx-content.actions';
import * as XxxContentSelectors from './xxx-content.selectors';
import {XxxContent} from "./xxx-content.types";

@Injectable({
  providedIn: 'root'
})
export class XxxContentFacadeService {
  isContentEmpty$ = (key: string): Observable<boolean> => this.store.select(XxxContentSelectors.selectIsContentEmpty(key));
  isContentError$ = (key: string): Observable<boolean> => this.store.select(XxxContentSelectors.selectIsContentError(key));
  isContentLoading$ = (key: string): Observable<boolean> => this.store.select(XxxContentSelectors.selectIsContentLoading(key));
  contentByKey$ = (key: string): Observable<XxxContent | undefined> => this.store.select(XxxContentSelectors.selectContentByKey(key))

  constructor(private store: Store) {
  }

  getContent(key: string): void {
    this.store.dispatch(XxxContentActions.showContent({key}))
  }
}

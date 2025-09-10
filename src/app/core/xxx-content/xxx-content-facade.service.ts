import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { XxxContentActions } from './xxx-content.actions';
import * as XxxContentSelectors from './xxx-content.selectors';
import { XxxContent } from './xxx-content.types';

@Injectable({
  providedIn: 'root'
})
export class XxxContentFacadeService {
  private store: Store = inject(Store);
  readonly errorMessage$ = (key: string): Observable<string> => this.store.select(XxxContentSelectors.selectErrorMessage(key));
  readonly isContentEmpty$ = (key: string): Observable<boolean> => this.store.select(XxxContentSelectors.selectIsContentEmpty(key));
  readonly isContentError$ = (key: string): Observable<boolean> => this.store.select(XxxContentSelectors.selectIsContentError(key));
  readonly isContentLoading$ = (key: string): Observable<boolean> => this.store.select(XxxContentSelectors.selectIsContentLoading(key));
  readonly contentByKey$ = (key: string): Observable<XxxContent | undefined> => this.store.select(XxxContentSelectors.selectContentByKey(key))

  showContent(key: string): void {
    this.store.dispatch(XxxContentActions.showContent({key}))
  }
}

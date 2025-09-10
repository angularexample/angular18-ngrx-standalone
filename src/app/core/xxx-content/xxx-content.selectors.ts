import { createFeatureSelector, createSelector } from '@ngrx/store';
import { XxxContent, xxxContentFeatureName, XxxContentState, XxxContentStatus } from './xxx-content.types';

export const selectContentState = createFeatureSelector<XxxContentState>(xxxContentFeatureName);

export const selectContents = createSelector(
  selectContentState,
  (state: XxxContentState): XxxContent[] => state?.contents
)

export const selectContentByKey = (key: string) => createSelector(
  selectContents,
  (contents: XxxContent[]): XxxContent | undefined => contents.find(item => item.key === key)
)

export const selectErrorMessage = (key: string) => createSelector(
  selectContentByKey(key),
  (content: XxxContent | undefined): string => content?.errorMessage || ''
);

export const selectIsContentLoaded = (key: string) => createSelector(
  selectContentByKey(key),
  (content: XxxContent | undefined): boolean => content !== undefined && content.status === XxxContentStatus.LOADED
);

export const selectIsContentLoading = (key: string) => createSelector(
  selectContentByKey(key),
  (content: XxxContent | undefined): boolean => content !== undefined && content.status === XxxContentStatus.LOADING
);

export const selectIsContentEmpty = (key: string) => createSelector(
  selectContentByKey(key),
  (content: XxxContent | undefined): boolean => content !== undefined && content.status === XxxContentStatus.EMPTY
);

export const selectIsContentError = (key: string) => createSelector(
  selectContentByKey(key),
  (content: XxxContent | undefined): boolean => content !== undefined && content.status === XxxContentStatus.ERROR
);

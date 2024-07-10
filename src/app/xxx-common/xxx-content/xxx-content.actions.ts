import {createAction, props} from '@ngrx/store';
import {XxxContent, xxxContentFeatureName} from "./xxx-content.types";

export const getContent = createAction(
  `${xxxContentFeatureName}.getContent`,
  props<{ key: string }>()
);

export const getContentError = createAction(
  `${xxxContentFeatureName}.getContentError`,
  props<{ key: string }>()
);

export const getContentSuccess = createAction(
  `${xxxContentFeatureName}.getContentSuccess`,
  props<{ content: XxxContent }>()
);

export const showContent = createAction(
  `${xxxContentFeatureName}.showContent`,
  props<{ key: string }>()
);

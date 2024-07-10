import {createAction, props} from '@ngrx/store';
import {XxxUser, XxxUserApiResponse, xxxUserFeatureName} from "./xxx-user.types";

export const getUsers = createAction(
  `${xxxUserFeatureName}.getUsers`
);

export const getUsersError = createAction(
  `${xxxUserFeatureName}.getUsersError`
);

export const getUsersSuccess = createAction(
  `${xxxUserFeatureName}.getUsersSuccess`,
  props<{ payload: XxxUserApiResponse }>()
);

export const showUsers = createAction(
  `${xxxUserFeatureName}.showUsers`
);

export const selectUser = createAction(
  `${xxxUserFeatureName}.selectUser`,
  props<{ userId: number }>()
);

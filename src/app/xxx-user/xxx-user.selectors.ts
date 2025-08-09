import { createFeatureSelector, createSelector } from "@ngrx/store";
import { XxxUser, xxxUserFeatureName, XxxUserState } from "./xxx-user.types";

export const selectUserState = createFeatureSelector<XxxUserState>(xxxUserFeatureName);

export const selectIsUsersLoading = createSelector(
  selectUserState,
  (state: XxxUserState) => state.isUsersLoading
);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state: XxxUserState | undefined) => state ? state.selectedUserId : undefined
)

export const selectUsers = createSelector(
  selectUserState,
  (state: XxxUserState) => state.users
)

export const selectIsUsersLoaded = createSelector(
  selectUsers,
  (users: XxxUser[]) => users.length > 0
);

export const selectIsNoSelectedUser = createSelector(
  selectSelectedUserId,
  (userId: number | undefined) => (userId === undefined),
);

export const selectIsUsersEmpty = createSelector(
  selectIsUsersLoading,
  selectUsers,
  (isLoading: boolean, users: XxxUser[]) => !isLoading && users.length === 0
);

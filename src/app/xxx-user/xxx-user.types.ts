export interface XxxUser {
  id: number;
  firstName: string;
  lastName: string;
}

export interface XxxUserApiResponse {
  limit: number;
  skip: number;
  total: number;
  users: XxxUser[];
}

export const xxxUserFeatureName='xxxUser';

export const xxxUserInitialState: XxxUserState = {
  isUsersLoading: false,
  selectedUserId: undefined,
  users: []
};

export interface XxxUserState {
  isUsersLoading: boolean;
  selectedUserId: number | undefined;
  users: XxxUser[];
}

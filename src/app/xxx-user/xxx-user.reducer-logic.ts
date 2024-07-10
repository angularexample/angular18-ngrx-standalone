import {XxxUser, XxxUserApiResponse, XxxUserState} from "./xxx-user.types";

export const xxxGetUsers = (state: XxxUserState) => {
  return {
    ...state,
    isUsersLoading: true,
    users: []
  }
}

export const xxxGetUsersError = (state: XxxUserState) => {
  return {
    ...state,
    isUsersLoading: false,
  }
}

export const xxxGetUsersSuccess = (state: XxxUserState, action: { payload: XxxUserApiResponse }) => {
  const users: XxxUser[] = <XxxUser[]>JSON.parse(JSON.stringify(action.payload.users));
  return {
    ...state,
    isUsersLoading: false,
    users,
  }
}
export const xxxSelectUser = (state: XxxUserState, action: {userId: number}) => {
  return {
    ...state,
    selectedUserId: action.userId
  }
}

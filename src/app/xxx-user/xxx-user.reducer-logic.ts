import {XxxUser, XxxUserApiResponse, XxxUserState} from "./xxx-user.types";

export const getUsers = (state: XxxUserState) => {
  return {
    ...state,
    isUsersLoading: true,
    users: []
  }
}

export const getUsersError = (state: XxxUserState) => {
  return {
    ...state,
    isUsersLoading: false,
  }
}

export const getUsersSuccess = (state: XxxUserState, action: { payload: XxxUserApiResponse }) => {
  const users: XxxUser[] = <XxxUser[]>JSON.parse(JSON.stringify(action.payload.users));
  return {
    ...state,
    isUsersLoading: false,
    users,
  }
}
export const selectUser = (state: XxxUserState, action: {userId: number}) => {
  return {
    ...state,
    selectedUserId: action.userId
  }
}

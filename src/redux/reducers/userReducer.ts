import { UserActionType, AuthStateType } from './../../types';
import { SET_USER } from "../types"

const initialState: AuthStateType = {
  user: {}
}

export const userReducer = (state = initialState, action: UserActionType) => {
  switch(action.type) {
    case SET_USER: 
      return {
        ...state,
        user: action.payload
      }
    default: return state
  }
}
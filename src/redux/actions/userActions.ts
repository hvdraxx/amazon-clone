import { UserActionType, UserType } from "../../types"
import { SET_USER } from "../types"

export const setUser = (user: UserType): UserActionType => {
  return {
    type: SET_USER,
    payload: user
  }
}
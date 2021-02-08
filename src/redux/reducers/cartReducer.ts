import { CartActionsType, CartStateType } from './../../types';
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS, QUANTITY_INCREMENT, QUANTITY_DECREMENT } from "../types"

const initialState: CartStateType = {
  items: {}
}

export const cartReducer = (state = initialState, action: CartActionsType): CartStateType => {
  switch(action.type) {

    case ADD_ITEM:
      if(state.items.hasOwnProperty(action.payload!.id)) {
        return state
      }
      else {
        return { 
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload.item
          }
        }
      }

    case REMOVE_ITEM:
      const deleteItem = (obj: any, prop: any) => {
        let {[prop]: omit, ...result} = obj
        return result
      }
      const modifiedItems = deleteItem(state.items, action.payload)
      return {
        ...state,
        items: modifiedItems
      }

    case CLEAR_ITEMS: {
      return {
        ...state,
        items: {}
      }
    }

    case QUANTITY_INCREMENT: {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              ...state.items[action.payload],
              quantity: state.items[action.payload].quantity + 1
            }
          }
        }
    }

    case QUANTITY_DECREMENT: {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              ...state.items[action.payload],
              quantity: state.items[action.payload].quantity - 1
            }
          }
        }
    }
    default: return state
  }
}
import { CartActionsType, ItemType } from './../../types';
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS, QUANTITY_INCREMENT, QUANTITY_DECREMENT } from "../types"

export const addItem = (id: number, item: ItemType): CartActionsType => {
  return {
    type: ADD_ITEM,
    payload: {id, item}
  }
}

export const removeItem = (id: number): CartActionsType => {
  return {
    type: REMOVE_ITEM,
    payload: id
  }
}

export const clearItems = (): CartActionsType => {
  return {
    type: CLEAR_ITEMS
  }
}

export const quantityIncrement = (id: number): CartActionsType => {
  return {
    type: QUANTITY_INCREMENT,
    payload: id
  }
}

export const quantityDecrement = (id: number): CartActionsType => {
  return {
    type: QUANTITY_DECREMENT,
    payload: id
  }
}
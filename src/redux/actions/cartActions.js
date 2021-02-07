import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS, QUANTITY_INCREMENT, QUANTITY_DECREMENT } from "../types"

export const addItem = (id, item) => {
  return {
    type: ADD_ITEM,
    payload: {id, item}
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id
  }
}

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS
  }
}

export const quantityIncrement = (id) => {
  return {
    type: QUANTITY_INCREMENT,
    payload: id
  }
}

export const quantityDecrement = (id) => {
  return {
    type: QUANTITY_DECREMENT,
    payload: id
  }
}
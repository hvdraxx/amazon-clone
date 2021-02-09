import { History } from "history"

// // // // // // // // // // // // // // //
//                 COMMON                 //
// // // // // // // // // // // // // // //

export type UserType = {
  [key: string]: any
}

export type ItemType = {
  [key: number]: {
      title: string
      image: string
      price: {
        whole: number
        fraction: number
      }
      rating: {
        stars: number
        quantity: number
      }
      quantity: number
  }
}

// // // // // // // // // // // // // // //
//                  PROPS                 //
// // // // // // // // // // // // // // //

export interface AppProps {
  history: History
  setUser(user: UserType): void
}

export interface ProductProps {
  id: number
  title: string
  price: {
    whole: number
    fraction: number
  }
  rating: {
    stars: number
    quantity: number
  }
  image: string
  items: ItemType
  addItem(id: number, item: ItemType): void
  removeItem(id: number): void
}

export interface NavbarProps {
  items?: ItemType
  user?: UserType
}

export interface CartProps {
  items: ItemType
}

export interface CartTotalProps {
  items: ItemType
  clearItems(): void
}

export interface CartItemsProps {
  items: ItemType
}

export interface CartItemProps { 
  id: number
  image: string
  title: string
  quantity: number
  price: {
    whole: number
    fraction: number
  }
  quantityIncrement(id: number): void
  quantityDecrement(id: number): void
  removeItem(id: number): void
}

export interface SignUpProps {
  setError(error: string): void
}

export interface SignInProps {
  setError(error: string): void
}

export interface NewToAmazonProps {
  clearError(error: string): void
}

export interface ErrorProps {
  error: string
}

export interface AgreeProps {
  path: string
}

// // // // // // // // // // // // // // //
//                 REDUX                  //
// // // // // // // // // // // // // // // 

// // // // // // // // // // // // // // //
//                ACTIONS                 //
// // // // // // // // // // // // // // //

export type UserActionType = {
  type: string
  payload: UserType
}

interface IaddItem {
  type: string
  payload: {
    id: number
    item: ItemType
  }
}

interface IremoveItem {
  type: string
  payload: number
}

interface IclearItems {
  type: string
  payload?: any
}

interface IquantityIncrement {
  type: string
  payload: number
}

interface IquantityDecrement {
  type: string
  payload: number
}

export type CartActionsType = IaddItem | IremoveItem | IclearItems | IquantityIncrement | IquantityDecrement

// // // // // // // // // // // // // // //
//                  STATE                 //
// // // // // // // // // // // // // // //

export type AuthStateType = UserType
export type CartStateType = {
  items: {
    [key: number]: {
      title: string
      price: {
        whole: number
        fraction: number
      }
      rating: {
        stars: number
        quantity: number
      }
      image: string
      quantity: number
    }
  }
}

export type mapStateType = {
  cart?: CartStateType
  auth?: AuthStateType
  router?: {}
}
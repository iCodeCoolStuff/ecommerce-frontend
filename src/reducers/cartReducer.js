import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  CLEAR_ITEMS
} from '../actions/types';

import {
  addItem,
  removeItem,
  setItemQuantity,
  incrementItemQuantity,
  decrementItemQuantity,
  clearItems
} from '../actions/functions';

const initialState = {
  items: [],
  total: 0.0
};

function setCartTotal(state) {
  let items = state.items.slice();
  let total = items.map(item => item.product.price * item.quantity).reduce((sum, value) => sum + value, 0);
  return {
    ...state, 
    total
  };
}

function cartReducer(state = initialState, action) {
  let cartState = state;

  switch(action.type) {
    case ADD_ITEM:
      cartState = {
        ...state,
        items: addItem(state.items, action)
      }
      break;
    case REMOVE_ITEM:
      cartState = {
        ...state,
        items: removeItem(state.items, action)
      };
      break;
    case SET_ITEM_QUANTITY:
      cartState = {
        ...state,
        items: setItemQuantity(state.items, action)
      };
      break;
    case INCREMENT_ITEM_QUANTITY:
      cartState = {
        ...state,
        items: incrementItemQuantity(state.items, action)
      }
      break;
    case DECREMENT_ITEM_QUANTITY:
      cartState = {
        ...state,
        items: decrementItemQuantity(state.items, action)
      }
      break;
    case CLEAR_ITEMS:
      cartState = {
        ...state,
        items: clearItems(state.items, action)
      };
      break;
    default:
      return state;
  }

  return setCartTotal(cartState);
}

export default cartReducer;
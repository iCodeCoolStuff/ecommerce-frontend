import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  CLEAR_ITEMS
} from './types';

let nextItemId = 0;

export function addItem(product) {
  return {
    type: ADD_ITEM,
    id: nextItemId++,
    product,
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
  };
}

export function setItemQuantity(id, quantity) {
  return {
    type: SET_ITEM_QUANTITY,
    id,
    quantity
  };
}

export function incrementItemQuantity(id) {
  return {
    type: INCREMENT_ITEM_QUANTITY,
    id
  };
}

export function decrementItemQuantity(id) {
  return {
    type: DECREMENT_ITEM_QUANTITY,
    id
  };
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS
  };
}
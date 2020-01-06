export function addItem(state, action) {
  return [...state, {
    id: action.id,
    product: action.product,
    quantity: 1
  }];
}

export function removeItem(state, action) {
  let items = state.slice();
  let itemIndex = items.findIndex(item => item.id === action.id);
  items.splice(itemIndex, 1);
  return items;
}

export function setItemQuantity(state, action) {
  let items = state.slice();
  let itemIndex = items.findIndex(item => item.id === action.id);
  items[itemIndex].quantity = action.quantity;
  return items;
}

export function incrementItemQuantity(state, action) {
  let items = state.slice();
  let itemIndex = items.findIndex(item => item.id === action.id);
  items[itemIndex].quantity += 1;
  return items;
}

export function decrementItemQuantity(state, action) {
  let items = state.slice();
  let itemIndex = items.findIndex(item => item.id === action.id);
  items[itemIndex].quantity -= 1;
  return items;
}

export function clearItems(state, action) {
  return [];
}
export default function reduce (state = {}, action) {
  switch (action.type) {
    case 'COFFEE_SHOP_FETCHED':
      return {
        coffeeShop: action.payload
      }
    default:
      return state
  }
}

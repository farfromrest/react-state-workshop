import * as types from './actionTypes'

export default function reduce (state = {coffeeShops: []}, action = {}) {
  if (action.type === types.LOCATIONS_FETCHED) {
    return {
      coffeeShops: action.coffeeShops
    }
  } else if (action.type === types.LOCATION_FETCHED) {
    return {
      coffeeShops: [action.coffeeShop]
    }
  } else {
    return state
  }
}

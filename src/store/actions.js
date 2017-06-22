import * as types from './actionTypes'
import TryCoffeeApiService from '../services/try-coffee-api'

export function fetchAllLocations () {
  return (dispatch) => {
    return TryCoffeeApiService
      .getAllLocations()
      .then(coffeeShops => {
        return dispatch({
          type: types.LOCATIONS_FETCHED,
          coffeeShops
        })
      })
  }
}

export function fetchSuggestion () {
  return (dispatch) => {
    return TryCoffeeApiService
      .getSuggestion()
      .then(coffeeShop => {
        return dispatch({
          type: types.LOCATION_FETCHED,
          coffeeShop
        })
      })
  }
}

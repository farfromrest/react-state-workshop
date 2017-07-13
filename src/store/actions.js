import TryCoffeeApiService from '../services/try-coffee-api'

export function fetchSuggestion () {
  return (dispatch) => {
    return TryCoffeeApiService
      .getSuggestion()
      .then(coffeeShop => {
        dispatch({
          type: 'COFFEE_SHOP_FETCHED',
          payload: coffeeShop
        })
      })
  }
}

const API_URL = 'http://trycoffee.herokuapp.com'

class TryCoffeeApiService {
  getAllLocations () {
    return fetch(`${API_URL}/locations`)
      .then(response => response.json())
  }
  getSuggestion () {
    return fetch(`${API_URL}/locations/suggest`)
      .then(response => response.json())
  }
}

export default new TryCoffeeApiService()

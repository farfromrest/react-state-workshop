import React from 'react'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Placeholder from '../../components/Placeholder'
import TryCoffeeApiService from '../../services/try-coffee-api'

import '../../stylesheets/reset.scss'
import '../../stylesheets/base.scss'
import style from './style.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSuggestCoffeeShop = this.handleSuggestCoffeeShop.bind(this)

    this.state = {
      isLoading: false
    }
  }

  handleSuggestCoffeeShop () {
    this.setState({
      isLoading: true
    })

    TryCoffeeApiService
      .getSuggestion()
      .then(coffeeShop => {
        this.setState({
          isLoading: false,
          coffeeShop
        })
      })

  }

  render () {
    let body

    if (this.state.isLoading) {
      body = <Loader />
    } else {
      if (this.state.coffeeShop) {
        body = <div>{this.state.coffeeShop.name}</div>
      } else {
        body = (
          <div>
            <Placeholder />
            <Button onClick={this.handleSuggestCoffeeShop}>Suggest a Coffee Shop</Button>
          </div>
        )
      }
    }


    return (
      <div className={style.wrapper}>
        <Header />
        {body}
      </div>
    )
  }
}

export default App

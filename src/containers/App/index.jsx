import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Placeholder from '../../components/Placeholder'
import CoffeeShop from '../../components/CoffeeShop'
import Button from '../../components/Button'
import TryCoffeeApiService from '../../services/try-coffee-api'
import { fetchSuggestion, fetchAllLocations } from '../../store/actions'

import '../../stylesheets/reset.scss'
import '../../stylesheets/base.scss'
import style from './style.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSuggestion = this.handleSuggestion.bind(this)
    this.handleViewingAll = this.handleViewingAll.bind(this)

    this.state = {
      loading: false
    }
  }

  handleSuggestion () {
    this.setState({
      loading: true
    })

    this.props.dispatch(fetchSuggestion())
      .then(() => {
        this.setState({
          loading: false
        })
      })
  }

  handleViewingAll () {
    this.setState({
      loading: true
    })

    this.props.dispatch(fetchAllLocations())
      .then(() => {
        this.setState({
          loading: false
        })
      })
  }

  render () {
    const { coffeeShops } = this.props
    let content
    let buttons
    let suggestCoffeeShopButton = <Button onClick={this.handleSuggestion}>Suggest a Coffee Shop</Button>
    let viewAllLink = <a className={style.viewAllLink} onClick={this.handleViewingAll}>View all Coffee Shops</a>

    if (this.state.loading) {
      content = <Loader />
    } else if (coffeeShops.length > 0) {
      content = coffeeShops.map((coffeeShop, index) => <CoffeeShop key={index} {...coffeeShop} />)

      if (coffeeShops.length === 1) {
        buttons = (
          <div className={style.buttons}>
            {viewAllLink}
          </div>
        )
      } else {
        buttons = (
          <div className={style.buttons}>
            {suggestCoffeeShopButton}
          </div>
        )
      }

    } else {
      content = <Placeholder />
      buttons = (
        <div className={style.buttons}>
          {suggestCoffeeShopButton}
          {viewAllLink}
        </div>
      )
    }

    return (
      <div className={style.wrapper}>
        <Header />
        {content}
        {buttons}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    coffeeShops: state.coffeeShops
  }
}

export default connect(mapStateToProps)(App)

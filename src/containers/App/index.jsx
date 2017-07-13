import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Placeholder from '../../components/Placeholder'
import { fetchSuggestion } from '../../store/actions'

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

    this.props.dispatch(fetchSuggestion())
      .then(() => {
        this.setState({
          isLoading: false
        })
      })

  }

  render () {
    let body

    if (this.state.isLoading) {
      body = <Loader />
    } else {
      if (this.props.coffeeShop) {
        body = <div>{this.props.coffeeShop.name}</div>
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

function mapStateToProps (state) {
  return {
    coffeeShop: state.coffeeShop
  }
}

export default connect(mapStateToProps)(App)

import React from 'react'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Placeholder from '../../components/Placeholder'

import '../../stylesheets/reset.scss'
import '../../stylesheets/base.scss'
import style from './style.scss'

class App extends React.Component {
  render () {
    return (
      <div className={style.wrapper}>
        <Header />
        <Placeholder />
      </div>
    )
  }
}

export default App

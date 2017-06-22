import React from 'react'

import style from './style.scss'

function CoffeeShop (props) {
  return (
    <div className={style.wrapper}>{props.name}</div>
  )
}

export default CoffeeShop

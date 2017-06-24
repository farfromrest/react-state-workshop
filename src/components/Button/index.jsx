import React from 'react'

import style from './style.scss'

function Button (props) {
  return (
    <div className={style.wrapper}>
      <button onClick={props.onClick} className={style.button}>{props.children}</button>
    </div>
  )
}

export default Button

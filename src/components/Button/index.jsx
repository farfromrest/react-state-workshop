import React from 'react'

import style from './style.scss'

function Button (props) {
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}

export default Button

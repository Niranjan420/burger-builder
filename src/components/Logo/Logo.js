import React from 'react'
import logoPic from '../../assets/burger-logo.png'
import classes from './Logo.module.css'

export default function Logo(props) {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={logoPic} alt="MyBurger" />
    </div >
  )
}

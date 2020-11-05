import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

export default function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => //returns an array of length of each ingredient with usless (_) values
      <BurgerIngredient key={igKey + i} type={igKey} />
    )
  })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add your ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

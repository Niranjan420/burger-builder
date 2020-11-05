import React, { Component } from 'react'
import Burger from '../../../components/Burger/Burger'
import BuildControls from '../../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
  salad: 2.49,
  cheese: 0.99,
  meat: 3.50,
  bacon: 5.00
}

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  }
  updatePurchaseState(ingredients) {

    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    })
      .reduce((sum, el) => {
        return sum + el;
      }, 0)
    this.setState({ purchaseable: sum > 0 })
  }
  addIngredientHandler = (type) => {
    const oldCOunt = this.state.ingredients[type]
    if (oldCOunt >= 5) {
      return
    }
    const updatedCount = oldCOunt + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    this.updatePurchaseState(updatedIngredients)
  }
  removeIngredientHandler = (type) => {
    const oldCOunt = this.state.ingredients[type]
    if (oldCOunt <= 0) {
      return
    }
    const updatedCount = oldCOunt - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    this.updatePurchaseState(updatedIngredients)
  }


  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      console.log(disabledInfo[key]);
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo}
          price={this.state.totalPrice} purchaseable={this.state.purchaseable} />

      </>
    )
  }
}

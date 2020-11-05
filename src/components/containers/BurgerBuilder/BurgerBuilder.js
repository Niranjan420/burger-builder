import React, { Component } from 'react'
import Burger from '../../../components/Burger/Burger'
import BuildControls from '../../../components/Burger/BuildControls/BuildControls'
import Modal from '../../../components/UI/Modal/Modal'
import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary'

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
    purchaseable: false,
    purchasing: false
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
  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert("You continued")
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {

      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
          <OrderSummary price={this.state.totalPrice} ingredients={this.state.ingredients} purchaseCancelled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo}
          price={this.state.totalPrice} purchaseable={this.state.purchaseable} ordered={this.purchaseHandler} />

      </>
    )
  }
}

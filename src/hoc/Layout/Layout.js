import React, { Component } from 'react'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } })
  }
  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} showSideDrawer={this.state.showSideDrawer} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}


export default Layout
import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

export default function SideDrawer(props) {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.showSideDrawer) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <>
      <Backdrop show={props.showSideDrawer} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} >
        <Logo className={classes.Logo} height={'10%'} />
        <nav>
          <NavItems />
        </nav>

      </div>
    </>

  )
}

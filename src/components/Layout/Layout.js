import React from 'react'
import classes from './Layout.module.css'
export default function Layout(props) {
  return (
    <>
      <div>
        Toolbar, SideDrawer, Backdrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </>
  )
}

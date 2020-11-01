import React, { Fragment } from 'react'
import { options } from '../utils'
import { NavLink } from 'react-router-dom'
import '../styles/sidebarOptions.css'

export default function SidebarOptions() {
  const printSidebarOptions= () => {
    return options.map(option=> {
      return (
        <NavLink to={ `/${option.key}` } activeClassName="active" key={option.key} className="singleOptionContainer">
          <span>
            { option.value }
          </span>
        </NavLink>
      )
    })
  }
  return (
    <Fragment>
      { printSidebarOptions() }
    </Fragment>
  )
}

import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

//IMPORT COMPONENTS
import Projects from './Projects'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Projects} />
    </Switch>
  )
}

export default Routes

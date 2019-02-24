import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

//IMPORT COMPONENTS
import Projects from './Projects'
import About from './About'

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Projects} /> */}
      <Route path="/" component={About} />
    </Switch>
  )
}

export default Routes

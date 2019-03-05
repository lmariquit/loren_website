import React, { useEffect } from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

//IMPORT COMPONENTS
import Projects from './Projects'
import About from './About'
import ProjectFluffTrainer from './ProjectFluffTrainer'
import ProjectIdentifi from './ProjectIdentifi'

const Routes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/FluffTrainer" component={ProjectFluffTrainer} />
      <Route path="/identifi" component={ProjectIdentifi} />
    </Switch>
  )
}

export default Routes

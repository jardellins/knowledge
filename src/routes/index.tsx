import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Questions from '../pages/Questions'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/questions" exact component={Questions} />
        </Switch>
    )
}

export default Routes
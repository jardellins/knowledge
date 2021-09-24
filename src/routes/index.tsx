import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Questions from '../pages/Questions'
import Result from '../pages/Result'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/questions" exact component={Questions} />
            <Route path="/result" exact component={Result} />
        </Switch>
    )
}

export default Routes
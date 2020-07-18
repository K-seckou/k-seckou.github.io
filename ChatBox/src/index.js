import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Connection from './components/Connection'
import NotFound from './components/NotFound'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connection} />
            <Route  path='/pseudo/:pseudo' component={App} />
            <Route  component={NotFound} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

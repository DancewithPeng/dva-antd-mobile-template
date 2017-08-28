import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ExamplePage from './routes/ExamplePage'

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage}>                
            </Route>
            <Route path='/example' component={ExamplePage} />
        </Router>
    );
}

export default RouterConfig;
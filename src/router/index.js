import React from 'react'
import { HashRouter, Route,Switch } from 'react-router-dom';

//同步加载
import AppContainer from '../container/AppContainer/AppContainer'


const RootRouter = () => (
  <HashRouter>
    <Switch>
      <Route  path="/" component={AppContainer} />
    </Switch>
  </HashRouter>
);
export default RootRouter;
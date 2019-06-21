import React from 'react'
import { HashRouter, Route,Switch } from 'react-router-dom';

//同步加载
import AppContainer from '../container/AppContainer/index'


const RootRouter = () => (
  <HashRouter>
    <Switch>
      <Route  path="/" component={AppContainer} />
    </Switch>
  </HashRouter>
);
export default RootRouter;
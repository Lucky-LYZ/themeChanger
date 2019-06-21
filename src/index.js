import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import RootRouter from './router/index'

ReactDOM.render(
    <Provider>
        <RootRouter />
    </Provider>
    ,
    document.getElementById('root')
);
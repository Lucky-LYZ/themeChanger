import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './public/css/normalize.css'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import RootRouter from './router/index'

ReactDOM.render(
    <Provider>
        <RootRouter />
    </Provider>
    ,
    document.getElementById('root')
);
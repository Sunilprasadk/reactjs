import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import {datareducer} from './store/datareducer';


const data = createStore(datareducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={data}>
        <App/>
    </Provider>
);
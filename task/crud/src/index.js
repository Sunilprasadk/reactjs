import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//react-redux
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';

//reducer
import datareducer from './store/datareducer';


//store which holds our data
const data = createStore(datareducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={data}>
        <App/>
    </Provider>
);
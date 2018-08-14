import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as Process from 'process'; 
import {
    HashRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import App from './controllers/App/App';
import { RootReducer } from './_reducers';
import {RES_URL} from "./config";

export const store = createStore(RootReducer);
declare var process : {
    env: {
      NODE_ENV: string
    }
  }

(function () {

    console.log("NODE_ENV",Process)
    if (typeof document !== "undefined") {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
            , document.getElementById('SiteContainer'), () => {
            });
    } else {
        return App;
    }

}()); 

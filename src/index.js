import React from 'react';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux-flow/configureStore'

const store = configureStore()

const renderApp = (NextApp) => {
    render(
        <Provider store={store}>
            <NextApp />
        </Provider>,
        document.querySelector('[data-js="root"]')
    )
}

renderApp(App)

//ReactDOM.render(<App />, document.querySelector('[data-js="root"]'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
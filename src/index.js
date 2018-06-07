import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import posts from './Reducers/index'

const store = createStore(posts)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

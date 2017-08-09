import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';

require('./index.html');

const appContainer = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    appContainer
)

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            appContainer
        )
    })
}

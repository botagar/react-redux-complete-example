import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RoutedApp from './common/routedApp.jsx';
import Home from './home/home.component.jsx';
import About from './about/about.component.jsx';

require('./index.html');

const appContainer = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <RoutedApp />
    </AppContainer>,
    appContainer
)

if (module.hot) {
    module.hot.accept('./home/home.component.jsx', () => {
        ReactDOM.render(
            <AppContainer>
                <RoutedApp />
            </AppContainer>,
            appContainer
        )
    })
}


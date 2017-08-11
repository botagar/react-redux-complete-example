import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
import RoutedApp from './common/routedApp.jsx';
import Home from './home/home.component.jsx';
import About from './about/about.component.jsx';

const store = configureStore();

require('./index.html');

const appContainer = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <RoutedApp />
            </Provider>
        </AppContainer>,
        appContainer
    )
}

if (module.hot) {
    module.hot.accept('./home/home.component.jsx', () => {
        render()
    })
}

render()

store.subscribe(render)
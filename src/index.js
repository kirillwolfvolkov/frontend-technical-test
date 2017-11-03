import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'data-layer/app/store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import App from './containers/app/App';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<App/>
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

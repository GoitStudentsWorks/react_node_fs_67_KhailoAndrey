import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import i18n from './i18n';
import { App } from 'components/App';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/react_node_fs_67_KhailoAndrey">
          <App />
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

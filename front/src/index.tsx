import React from 'react';
import ReactDOM from 'react-dom';
import {
  AdaptivityProvider,
  ConfigProvider,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { RouterContext } from '@happysanta/router';
import { router } from './router';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <RouterContext.Provider value={router}>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </RouterContext.Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

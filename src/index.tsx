import { Provider } from 'react-redux';
import { store } from '@/store/store';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

axios.defaults.headers.common[`Content-Type`] = `application/json`;

axios.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }

  const token = localStorage.getItem(`accessToken`);

  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  } else {
    config.headers.Authorization = ``;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(
  document.getElementById(`root`) as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

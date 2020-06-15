import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { register } from './serviceWorker';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConfigProvider componentSize="large">
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

register({
  onUpdate() {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  },
});

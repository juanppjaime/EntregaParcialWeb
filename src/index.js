import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
  import localeEsMessages from "./locales/es";
  import localeEnMessages from "./locales/en";

const locale = navigator.language.startsWith('es') ? 'es-ES' : 'en-US';
const messages = locale.startsWith('es') ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
);

reportWebVitals();

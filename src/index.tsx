import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import './index.css';
import Index from './components';
import { reducers }  from 'myRedux';

const store = createStore(reducers, 
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

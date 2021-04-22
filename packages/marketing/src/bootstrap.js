import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory , createBrowserHistory } from 'history';
import App from './App';

export const mount = (el , { onNavigate ,defaultHistory }) => {

  const history = defaultHistory || createMemoryHistory();

  ReactDOM.render(<App history={history} /> , el);

  history.listen(onNavigate);
  

  return {
    onParentNavigate({ pathname : nextPathName}) {
      const { pathname  } = history.location;
      if(pathname !== nextPathName ) {
        history.push(nextPathName);
      }
    }
  }
}

if(process.env.NODE_ENV === 'development') {

  const el = document.querySelector('#_marketing-dev');
  el && mount(el, { defaultHistory : createBrowserHistory() });
}
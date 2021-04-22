import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory , createBrowserHistory } from 'history';
import App from './App';

export const mount = (el , { onNavigate ,defaultHistory,initialPath, onSignIn }) => {

  const history = defaultHistory || createMemoryHistory({
    initialEntries:[initialPath]
  });

  ReactDOM.render(<App history={history} onSignIn={onSignIn}/> , el);

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
  const el = document.querySelector('#_auth-dev');
  el && mount(el, { defaultHistory : createBrowserHistory() });
}
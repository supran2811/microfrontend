import React, { Suspense, useEffect } from 'react';
import { Router , Switch, Route, Redirect  } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import { useState } from 'react';

const Marketing = React.lazy(() => import("./components/Marketing"));
const Auth = React.lazy(() => import("./components/Auth"));
const Dashbaord = React.lazy(() => import("./components/Dashboard"));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const history = createBrowserHistory();

const App = () => {
  const [ isSignedIn, setIsSignedIn ] = useState(false);

  useEffect(() => {
    if(isSignedIn) {
      history.push('/dashboard');
    }
    
  },[isSignedIn])

  return (
  <StylesProvider generateClassName={generateClassName}>
    <Router history = {history}>
      <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}> 
          <Route path="/auth">
            <Auth onSignIn={() => setIsSignedIn(true)}/>
          </Route>
          <Route path="/dashboard">
            {!isSignedIn && <Redirect to ="/" />}
            <Dashbaord />
          </Route>
          <Route path="/" component={Marketing} />
        </Suspense>
      </Switch>      
    </Router>
  </StylesProvider>
  )
}

export default App;
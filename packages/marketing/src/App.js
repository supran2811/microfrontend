import React from 'react';
import { Switch, Route , Router } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@material-ui/core/styles';
import LandingPage from './components/Landing';
import PricingPage from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

const App = ({ history }) => {
return (
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history} >
        <Switch>
          <Route exact path="/pricing" component={PricingPage} />
          <Route path='/' component={LandingPage}/>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
);
}

export default App;
import { Route, Switch } from 'react-router';

import { Header, Home, Inventory, Member } from './components';

function App() {
  return (
    <>
      <Header />
      <Member />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/inventory'>
          <Inventory />
        </Route>
      </Switch>
    </>
  );
}

export default App;

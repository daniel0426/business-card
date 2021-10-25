import { BrowserRouter,Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({FileInput, authService, cardRepository}) {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Switch>
          <Route exact path='/'>
            <Login authService = {authService}/>
          </Route>
          <Route path='/main'>
              <Maker cardRepository={cardRepository} FileInput = {FileInput} authService={authService}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;

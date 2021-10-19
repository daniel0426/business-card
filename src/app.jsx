import { Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService}) {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/'>
          <Login authService = {authService}/>
        </Route>
        <Route path='/main'>
            <Maker authService={authService}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth-service';
import firebaseApp from './service/firebase';
import { BrowserRouter as Router} from 'react-router-dom';
const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authService = {authService} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


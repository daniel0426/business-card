import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth-service';
import firebaseApp from './service/firebase';
import { BrowserRouter as Router} from 'react-router-dom';
import ImageUploader from './service/imageUploader';
import ImageInput from './components/imageInput/imageInput';

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = props => (<ImageInput {...props} imageUploader = {imageUploader} />)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authService = {authService} FileInput ={FileInput}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


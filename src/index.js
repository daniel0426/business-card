import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth-service";
import firebaseApp from "./service/firebase";
import ImageUploader from "./service/imageUploader";
import ImageInput from "./components/imageInput/imageInput";
import CardRepository from "./service/card-repo";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);

const FileInput = (props) => (
  <ImageInput {...props} imageUploader={imageUploader} />
);
ReactDOM.render(
  <React.StrictMode>
      <App
        authService={authService}
        FileInput={FileInput}
        cardRepository={cardRepository}
      />
  </React.StrictMode>,
  document.getElementById("root")
);

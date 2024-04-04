import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

/*Додаток ініціалізується зверху вниз, спочатку дані проходять через Провайдер і в нього потрапляє INITIAL_STATE нашого стору. 
Далі, проходячи через ворота синхронізації (PersistGate),PersistGate йде в локальне сховище і дивиться, які дані в ЛС були 
збережені і він додає ці дані до INITIAL_STATE стору. І далі вже дані з ЛС + INITIAL_STATE потрапляють в наш App */
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

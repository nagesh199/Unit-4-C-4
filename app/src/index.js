import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { store } from "./Redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById("root");
const root = createRoot(container);

root.render( 
    <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
    </BrowserRouter> 
 </React.StrictMode>   

);

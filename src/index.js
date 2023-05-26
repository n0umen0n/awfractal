import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';
import { UALProvider, withUAL } from 'ual-reactjs-renderer'
import { Wax } from "@alienworlds/ual-wax";
import { Anchor } from 'ual-anchor'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const appName = "Fractal Voting";

const chain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      //protocol: "https",
      //host: "eos.greymass.com",
      //http://eos.api.eosnation.io
      protocol: "https",
      host: "wax.eosdac.io",
      port: "",
    },
  ],
};

const anchor = new Anchor([chain], {
  appName,
});
const wax = new Wax([chain]);


const supportedChains = [chain];
const supportedAuthenticators = [
  anchor, wax
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UALProvider
          chains={supportedChains}
          authenticators={supportedAuthenticators}
          appName={appName}
        >
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/admin" element={<Admin />}/>
          </Routes>
        </UALProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

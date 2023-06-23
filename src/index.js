import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';
import { UALProvider, withUAL } from 'ual-reactjs-renderer'
import { Wax } from "@alienworlds/ual-wax";
import { Anchor } from 'ual-anchor'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
} from "react-router-dom";

const appName = "Fractal Voting";

const endpointlist = ["https://wax.eosdac.io", "https://wax.pink.qq", "https://api.wax.bountyblok.io", "https://chain.wax.io", "https://wax.eosusa.io","https://wax.eosdac.io"]
let endpoint;

endpoint = localStorage.getItem("endpoint")

const chain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      //protocol: "https",
      //host: "eos.greymass.com",
      //http://eos.api.eosnation.io
      protocol: "https",
      host: endpoint?.split("//")[1],
      port: "",
    },
  ],
};

const anchor = new Anchor([chain], {
  appName,
});
//const wax = new Wax([chain]);


const supportedChains = [chain];
/*
const supportedAuthenticators = [
  anchor, wax
];
*/

const supportedAuthenticators = [
  anchor
];
const routing = (
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
);


if(localStorage.getItem("endpoint") === null){
  for(let item in endpointlist){
    try{
      fetch(`${endpointlist[item]}/v1/chain/get_table_rows`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          json: true,
          code: "pollpollpoll",
          table: "divperiod",
          scope: "pollpollpoll",
          limit: 1,
        }),
      }).then((res) => {
          if(res.ok){
            localStorage.setItem("endpoint", endpointlist[item])
            endpoint = endpointlist[item]
            console.log("Endpoint works for you:" + endpointlist[item])
            ReactDOM.render(routing, document.getElementById("root"));
          }
          else{
            console.log("Endpoint does not work for you:" + endpointlist[item])
          }
        }).catch(error => {
          console.log("Endpoint seems to be down:"+endpointlist[item])
      })
      }catch(error){
        console.log("Endpoint seems to be down:"+endpointlist[item])
      }
  }
  }
  else{
    ReactDOM.render(routing, document.getElementById("root"));
  }
reportWebVitals();


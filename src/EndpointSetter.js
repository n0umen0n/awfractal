import React, { useState, useEffect } from "react";
import './endpoint.css';

export default function EndpointSetter() {
    const handleDropdownChange = (e) => {
        console.log(e.target.value)
        localStorage.setItem("endpoint", e.target.value)
        window.location.reload();
      }
    return(
        <div>
        <select id="dropdown" onChange={handleDropdownChange} style={{"border":"2px solid 5024ff99", "padding":"20px 5px 20px 5px"}}>
          <option value="" selected disabled hidden>Pick endpoint</option>
          <option value="https://chain.wax.io">Chain Wax</option>
          <option value="https://wax.cryptolions.io">Cryptolions</option>
          <option value="https://wax.eosdac.io">Eosdac</option>
          <option value="https://wax.pink.qq">Pinkqq</option>
          <option value="https://api.wax.bountyblok.io">Bountyblok</option>
          <option value="https://wax.eoseoul.io">EOSeoul</option>
          <option value="https://wax.eosusa.io">EOSUsa</option>
        </select>
      </div>
    )
}


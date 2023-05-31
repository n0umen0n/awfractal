import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import './endpoint.css';

export default function EndpointSetter() {
    const handleDropdownChange = (e) => {
        console.log(e.target.value)
        localStorage.setItem("endpoint", e.target.value)
        window.location.reload();
    }

    return (
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
            <Select
                shrink={false}
                defaultValue={localStorage.getItem("endpoint")}
                labelId="demo-simple-select-label"
                onChange={handleDropdownChange}
                sx={{ backgroundColor:'white', color:"black" }}
                >
                <MenuItem value="https://chain.wax.io">Chain Wax</MenuItem>
                <MenuItem value="https://wax.cryptolions.io">Cryptolions</MenuItem>
                <MenuItem value="https://wax.eosdac.io">Eosdac</MenuItem>
                <MenuItem value="https://wax.pink.qq">Pinkqq</MenuItem>
                <MenuItem value="https://api.wax.bountyblok.io">Bountyblok</MenuItem>
                <MenuItem value="https://wax.eoseoul.io">EOSeoul</MenuItem>
                <MenuItem value="https://wax.eosusa.io">EOSUsa</MenuItem>
            </Select>
            </FormControl>

            </Box>

    )
}

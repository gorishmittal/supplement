import React from "react";
import Styles from "./PriceFilter.module.css"
import { Slider } from "@mui/material";
import Box from '@mui/material/Box';

const PriceFilter = () => {
  return (
    <div className={Styles.mainDiv}>
      <h3>Price</h3>
      <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[20,100]}
    
        valueLabelDisplay="auto"
      
      />
    </Box>
    </div>
  );
};

export default PriceFilter;

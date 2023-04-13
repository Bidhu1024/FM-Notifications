import React from "react";
import image2 from "../../assets/images/avatar-angela-gray.webp";
import { Box,Typography } from "@mui/material";
const Box2 = () => {
  return (
    <Box sx={{display:'flex',marginTop:'.4rem', alignItems:'center',justifyContent:'start', padding:'8px 10px', gap:'20px',width:'80%', backgroundColor:'rgba(233, 239, 240,0.5)' }}>
      <Box>
        <img src={image2} height={50} width={50} alt="angela gray" />
      </Box>
      <Box>
        <Box><Typography><span>Angela Gray</span><span> followed you</span></Typography></Box>
        <Box><Typography>5m ago</Typography></Box>
      </Box>
    </Box>
  );
};

export default Box2;

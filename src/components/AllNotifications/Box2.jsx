import React from "react";
import image2 from "../../assets/images/avatar-angela-gray.webp";
import { Box,Typography } from "@mui/material";
import RedDot from "../RedDot"

const Box2 = () => {
  return (
    <Box sx={{display:'flex',boxShadow:'1', alignItems:'center',justifyContent:'start', padding:'8px 10px', gap:'20px',width:'80%', backgroundColor:'rgba(233, 239, 240,0.5)' }}>
      <Box>
        <img src={image2} height={50} width={50} alt="angela gray" />
      </Box>
      <Box>
        <Box sx={{display:'flex', alignItems:'center'}}><Typography fontSize='14px'><span style={{fontWeight:'bold', color:'#1a2547', cursor:'pointer',}}>Angela Gray</span><span style={{color:'grey'}}> followed you</span></Typography> <RedDot /></Box>
        <Box><Typography fontSize="12px" color="grey">5m ago</Typography></Box>
      </Box>
    </Box>
  );
};

export default Box2;

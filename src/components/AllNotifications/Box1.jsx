import { Box,Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/images/avatar-mark-webber.webp";
const Box1 = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', padding:'8px 25px', gap:'20px',width:'80%' }}>
      <Box>
        <img src={image1} alt="img1" height={50} width={50} />{" "}
      </Box>
      <Box >
        <Box><Typography fontColor="#d5d9e6" fontSize="14px"><span style={{fontWeight:'bold'}}>Mark Webber</span> reacted to your recent post <span style={{fontWeight:'bold', color:'#1a2547', cursor:'pointer'}}>My first tournament today!</span></Typography></Box>
        <Box> <Typography fontSize="12px" fontColor="gray">1m ago</Typography></Box>
      </Box>
    </Box>
  );
};

export default Box1;

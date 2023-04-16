import React from "react";
import imag5 from "../../assets/images/avatar-kimberly-smith.webp";
import image6 from "../../assets/images/image-chess.webp"
import { Box,Typography } from "@mui/material";

const Box5 = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',width:'80%', alignItems:'center', padding:'8px 10px'}}>
    <Box sx={{display:'flex', justifyContent:'start', gap:'20px'}}>
        <Box><img src={imag5} height={50} width={50} alt="kim" /></Box>
        <Box>
            <Box><Typography sx={{fontSize:'14px', color:'grey'}}><span style={{fontWeight:'bold', fontSize:'14px', color:'black'}}>Kimberly Smith</span> commented on your picture</Typography></Box>
            <Box><Typography sx={{fontSize:'14px', color:'grey'}}>1 week ago</Typography></Box>
        </Box>
    </Box>
    <Box><img src={image6}  height={50} width={50} alt="" /></Box>
    </Box>
  );
};

export default Box5;

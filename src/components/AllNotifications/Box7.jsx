import React from "react";
import image8 from "../../assets/images/avatar-anna-kim.webp";
import { Box,Typography } from "@mui/material";

const Box3 = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center',justifyContent:'start', padding:'8px 10px', gap:'20px',width:'80%'}}>
      <Box>
        <img src={image8} height={50} width={50} alt="jacob" />
      </Box>
      <Box>
        <Box sx={{display:'flex', alignItems:'center', gap:'4px'}}><Typography  fontSize='14px'><span style={{fontWeight:'bold'}}>Anna Kim</span> <span style={{color:"grey"}}>left the group</span> <span style={{fontWeight:'bold', color:'#585858'}}>Chess Club  </span></Typography></Box>
        <Box><Typography fontSize="12px" color="grey">2 weeks ago</Typography></Box>
      </Box>
    </Box>
  );
};

export default Box3;
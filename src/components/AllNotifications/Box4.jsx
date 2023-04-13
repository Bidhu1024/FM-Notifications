import { Box,Typography } from "@mui/material";
import React from "react";
import image4 from "../../assets/images/avatar-rizky-hasanuddin.webp"
const Box4 = () => {
  return (
<Box sx={{display:'flex', alignItems:'center',justifyContent:'start', padding:'8px 10px', gap:'20px',width:'80%', backgroundColor:'rgba(233, 239, 240,0.5)',marginTop:'.4rem'}}>    
      <Box><img src={image4} height={50} width={50} alt="rizky" /></Box>
      <Box>
        <Box><Typography><span>Rizky Hasanuddin </span> <span>sent you a private message</span></Typography></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Box4;

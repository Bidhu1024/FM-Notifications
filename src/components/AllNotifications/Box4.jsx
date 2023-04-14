import { Box,Typography } from "@mui/material";
import React from "react";
import image4 from "../../assets/images/avatar-rizky-hasanuddin.webp"
const Box4 = () => {
  return (
<Box sx={{display:'flex', padding:'8px 10px', gap:'20px',width:'80%', marginTop:'.4rem'}}>    
      <Box ><img src={image4} height={50} width={50} alt="rizky" /></Box>
      <Box>
        <Box><Typography sx={{color:'grey', fontSize:'14px'}}><span style={{fontSize:'14px', color:'black', fontWeight:'bold'}}>Rizky Hasanuddin </span> <span>sent you a private message</span></Typography></Box>
        <Box><Typography sx={{color:'grey', fontSize:'12px'}}>5 days ago</Typography></Box>
        <Box sx={{backgroundColor:'rgba(233, 239, 240,0.5)', padding:'1rem', }}><Typography sx={{fontSize:'12px', color:'grey'}}>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</Typography></Box>
      </Box>
    </Box>
  );
};

export default Box4;

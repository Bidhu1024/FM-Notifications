import React from "react";
import image7 from "../../assets/images/avatar-nathan-peterson.webp";
import { Box,Typography } from "@mui/material";

const Box6 = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center',justifyContent:'start', padding:'8px 10px', gap:'20px',width:'80%',marginTop:'.4rem'}}>
      <Box>
        <img src={image7} height={50} width={50} alt="nathan" />
      </Box>
      <Box>
        <Box sx={{display:'flex', alignItems:'center', gap:'4px'}}><Typography  fontSize='14px'><span style={{fontWeight:'bold'}}>Nathan Peterson</span> <span style={{color:"grey"}}>reacted to your recent post </span> <span style={{fontWeight:'bold', color:'darkgrey'}}>% end-game strategies to increase your win rate  </span></Typography> </Box>
        <Box><Typography fontSize="12px" color="grey">2 weeks ago</Typography></Box>
      </Box>
    </Box>
  );
};

export default Box6;
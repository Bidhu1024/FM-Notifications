import { Box, Typography } from "@mui/material";
import React from "react";
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 10px",
        width:'80%'
      }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Typography fontWeight="700">Notifications</Typography>
        <span style={{padding:' 0 5px', backgroundColor:'navy', color:'white'}}>3</span>
      </Box>
      <Box>
      
        <Typography
          fontFamily="Raleway, Arial"
          sx={{
            color: "gray",
            "&: hover": {
              color: "blue",
              cursor: "pointer",
            },
          }}
        >
          Mark all as read
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

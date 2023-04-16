import { Box, Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/images/avatar-mark-webber.webp";
import RedDot from "../RedDot";
const Box1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "8px 10px",
        gap: "20px",
        width: "80%",
        backgroundColor: "rgba(233, 239, 240,0.5)",
      }}
    >
      <Box>
        <img src={image1} alt="img1" height={50} width={50} />{" "}
      </Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap:'4px' }}>
          <Typography fontColor="#d5d9e6" fontSize="14px">          
            <span style={{ fontWeight: "bold" }}>Mark Webber</span> reacted to
            your recent post{" "}
            <span
            // onMouseOver="color:'blue'"
              style={{
                fontWeight: "bold",
                color: "#1a2547",
                cursor: "pointer",
               
              }}
            >
              My first tournament today!
            </span>            
            <Box sx={{display:'inline-flex',alignItems:'center',ml:"4px"}}>
            <RedDot />
            </Box>
          </Typography>                              
        </Box>
        <Box>
          {" "}
          <Typography fontSize="12px" fontColor="grey">
            1m ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Box1;

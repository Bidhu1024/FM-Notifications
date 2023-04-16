import React from "react";
import imag3 from "../../assets/images/avatar-jacob-thompson.webp";
import { Box, Typography,Badge  } from "@mui/material";
import RedDot from "../RedDot";
const Box3 = () => {
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
        <img src={imag3} height={50} width={50} alt="jacob" />
      </Box>
      <Box sx={{flex:'1'}}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px", width:'100%' }}>
          <Typography fontSize="14px">
            <span style={{ fontWeight: "bold" }}>Jacob Thompson</span>{" "}
            <span style={{ color: "grey" }}>has joined your group</span>{" "}
            <Box sx={{display:'inline-flex', alignItems:'center', gap:'4px'}}>
            <span
              style={{
                fontWeight: "bold",
                color: "#1a2547",
                cursor: "pointer",
              }}
            >
              Chess Club
            </span>{" "}
            <RedDot/>
            </Box>
          </Typography>{" "}
        </Box>
        <Box>
          <Typography fontSize="12px" color="grey">
            1 day ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Box3;

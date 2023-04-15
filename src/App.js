import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Box1 from "./components/AllNotifications/Box1";
import Box2 from "./components/AllNotifications/Box2";
import Box3 from "./components/AllNotifications/Box3";
import Box4 from "./components/AllNotifications/Box4";
import Box5 from "./components/AllNotifications/Box5";
import Box6 from "./components/AllNotifications/Box6";
import Box7 from "./components/AllNotifications/Box7";
function App() {
  return (
    <Box
      sx={{
    
        display: "flex",
        justifyContent: "center",

            alignItems: "center",
        backgroundColor: "#e4edf0",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
         
          alignItems: "center",
          gap: "8px",
          backgroundColor: "white",
        }}
      >
        <Header />
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
      </Box>
    </Box>
  );
}

export default App;

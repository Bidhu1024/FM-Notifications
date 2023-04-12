import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Box1 from "./components/AllNotifications/Box1";
function App() {
  return (
    <Box sx={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center' }}>
      <Box sx={{width:'60%', height:'100%', backgroundColor:'yellow', marginTop:'4rem'}}>
      <Header />
      <Box1/>
      </Box>
    </Box>
  );
}

export default App;

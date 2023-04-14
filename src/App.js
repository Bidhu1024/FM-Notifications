import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Box1 from "./components/AllNotifications/Box1";
import Box2 from "./components/AllNotifications/Box2";
import Box3 from './components/AllNotifications/Box3';
import Box4 from "./components/AllNotifications/Box4";
import Box5 from './components/AllNotifications/Box5';
function App() {
  return (
    <Box sx={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center' }}>
      <Box sx={{width:'60%', height:'100%', marginTop:'4rem',}}>
      <Header />
      <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Box1/>
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      </Box>
      </Box>
    </Box>
  );
}

export default App;

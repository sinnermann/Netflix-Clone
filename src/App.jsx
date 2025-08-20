import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />        {/* show login first */}
        <Route path="/home" element={<Home />} />     {/* add /home route */}
        <Route path="/player/:id" element={<Player />}/>
      </Routes>
    </div>
  );
};

export default App;

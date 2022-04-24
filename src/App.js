import "./style/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Login from "./pages/Login";
import PrivateRoute from "./components/Private/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

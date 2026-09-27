import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ModelDetails from "./pages/ModelDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/model/:modelId" element={<ModelDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

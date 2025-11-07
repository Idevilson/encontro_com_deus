import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EncontroComDeus from "./pages/EncontroComDeus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encontro-com-deus" element={<EncontroComDeus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

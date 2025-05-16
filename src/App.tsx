import { Routes, Route } from "react-router-dom";
import Anamnese from "./pages/Anamnese";
import WebPage from "./pages/Lovable/Index";


function App() {
  return (
    <Routes>
      <Route path="/" element={<WebPage />} />
      <Route path="/anamnese" element={<Anamnese />} />
    </Routes>
  );
}

export default App;

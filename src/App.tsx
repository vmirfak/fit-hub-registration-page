import { Routes, Route } from "react-router-dom";
import Anamnese from "./pages/Anamnese";
import WebPageLovable from "./pages/Lovable/Index";


function App() {
  return (
    <Routes>
      <Route path="/" element={<WebPageLovable />} />
      <Route path="/anamnese" element={<Anamnese />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Anamnese from "./pages/Anamnese";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/anamnese" element={<Anamnese />} />
    </Routes>
  );
}

export default App;

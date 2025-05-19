import { Routes, Route } from "react-router-dom";
import Anamnese from "./pages/Anamnese";
import WebPage from "./pages/Lovable/Index";
import { AnamneseProvider } from "@/context/useAnamnese";


function App() {
  return (
    <AnamneseProvider>
      <Routes>
        <Route path="/" element={<WebPage />} />
        <Route path="/anamnese" element={<Anamnese />} />
      </Routes>
    </AnamneseProvider>
  );
}

export default App;

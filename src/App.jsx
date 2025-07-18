import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ECGService from "./pages/services/ecg-test";
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecg-test" element={<ECGService />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

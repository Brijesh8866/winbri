import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./components/Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

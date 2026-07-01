import { BrowserRouter, Route, Routes } from "react-router-dom";
import Props from "./pages/Props";
import Conditional from "./pages/Conditional";


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/about" element={<div>About</div>}></Route>
      <Route path="/props" element={<Props></Props>}></Route>
      <Route path="/conditional" element={<Conditional></Conditional>}></Route>
    </Routes>
  </BrowserRouter>
}
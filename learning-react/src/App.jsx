import { BrowserRouter, Route, Routes } from "react-router-dom";
import Props from "./pages/Props";
import Conditional from "./pages/Conditional";
import EventHandler from "./pages/EventHandler";
import Propagation from "./pages/Propagation";
import Render from "./pages/Render";


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/about" element={<div>About</div>}></Route>
      <Route path="/props" element={<Props></Props>}></Route>
      <Route path="/conditional" element={<Conditional></Conditional>}></Route>
      <Route path="/event-handler" element={<EventHandler></EventHandler>}></Route>
      <Route path="/event-propagation" element={<Propagation handleOnClick={(e) => { e.stopPropagation(); alert("Parent") }} ></Propagation>}></Route>
      <Route path="/render" element={<Render ></Render>}></Route>
    </Routes>
  </BrowserRouter >
}
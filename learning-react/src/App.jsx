import { BrowserRouter, Route, Routes } from "react-router-dom";
import Props from "./pages/Props";
import Conditional from "./pages/Conditional";
import EventHandler from "./pages/EventHandler";
import Propagation from "./pages/Propagation";
import Render from "./pages/Render";
import SnapShoot from "./pages/SnapShoot";
import State from "./pages/State";
import Immer from "./pages/ExampleWithLibrary/Immer";
import StateNoteApp from "./pages/Reducer/State/StateNoteApp";
import ReducerNoteApp from "./pages/Reducer/Reducer/ReducerNoteApp";
import ImmerNoteApp from "./pages/Reducer/Immer/ImmerNoteApp";
import Context from "./pages/Context/Context";
import ContextState from "./pages/Context/ContextState";
import ContextReduce from "./pages/Context/ContextReduce";
import Ref from "./pages/Ref";


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
      <Route path="/snap-shoot" element={<SnapShoot ></SnapShoot>}></Route>
      <Route path="/state" element={<State ></State>}></Route>
      <Route path="/lib/immer" element={<Immer ></Immer>}></Route>
      <Route path="/reducer/immer" element={<ImmerNoteApp ></ImmerNoteApp>}></Route>
      <Route path="/reducer" element={<ReducerNoteApp ></ReducerNoteApp>}></Route>
      <Route path="/reducer/state" element={<StateNoteApp ></StateNoteApp>}></Route>
      <Route path="/context" element={<Context ></Context>}></Route>
      <Route path="/context-state" element={<ContextState ></ContextState>}></Route>
      <Route path="/context-reduce" element={<ContextReduce ></ContextReduce>}></Route>
      <Route path="/ref" element={<Ref ></Ref>}></Route>

    </Routes>
  </BrowserRouter >
}
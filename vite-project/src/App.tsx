import { useState } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import TodoList from "./pages/TodoList";
import { DebugObserver } from "./developmentTool/ObserverAllState";
import DebugButton from "./developmentTool/ObservingStateChangeOnDemand";
import TimeTravelObserver from "./developmentTool/TimeTravelObserver";
function App() {
  return (
    <RecoilRoot>
      {/* <DebugObserver /> */}
      <TodoList />
      {/* <DebugButton /> */}
      <TimeTravelObserver />
    </RecoilRoot>
  );
}

export default App;

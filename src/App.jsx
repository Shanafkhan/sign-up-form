import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="flex justify-between">
        <Login />
        <SignUp />
      </div>
    </>
  );
}

export default App;

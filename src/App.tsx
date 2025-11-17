import React from "react";
import "./App.css";
import Profile from "./profile";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="max-w-3xl m-auto my-4 text-slate-80">
        <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
        <div>
          <Profile id="u1" />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;

import React from "react";
import Dashboard from "./components/Dashboard";
import "firebase/firestore";
import "firebase/auth";
import { Fuego } from "./fuego";
import { FuegoProvider } from "@nandorojo/swr-firestore";
import config from "./config";

const fuego = new Fuego({
  apiKey: config.API_KEY,
  authDomain: "https://ffun-ca928.web.app",
  databaseURL: "ffun-ca928.firebaseio.com",
  projectId: "ffun-ca928",
});

function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <Dashboard />
    </FuegoProvider>
  );
}

export default App;

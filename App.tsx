import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/Pages/Home';
import { Login } from './src/Pages/Login';

const telas = [
  { id: 1, name: "login" },
  { id: 2, name: "home" },
];

export default function App() {

  const [telasEstado, setTelasEstado] = useState(telas[0].name);

  const logado = () => {
    setTelasEstado(telas[1].name);
  }

  return (
    <>
      <StatusBar style="auto" />
      {telasEstado === "login" && <Login logado={logado} />}
      {telasEstado === "home" && <Home />}
    </>
  );
}

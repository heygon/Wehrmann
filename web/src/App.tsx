import React, { useState, useEffect } from 'react';
import Home from './screens/Home/index'
import Login from './screens/Login/index'

export default function App() {

  const [logado, setLogado] = useState(false);

  function verificarLogado(){

    let dados = localStorage.dadosTeste;
    if(dados == null){
      setLogado(false)
    }else{
      setLogado(true)
    }

  }
  useEffect(() => {
    verificarLogado()
}, []);

  return (
    <>
      {logado ?
          <Home />
          :
          <Login />
      }
    </>
  )
}
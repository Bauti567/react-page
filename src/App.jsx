import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header'
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';


function App(){
  return (
    <GlobalProvider>
      <Header></Header>
      <Balance></Balance>
      <TransactionForm></TransactionForm>
      <h1>Hola mundo</h1>
    </GlobalProvider>
  )
}

export default App
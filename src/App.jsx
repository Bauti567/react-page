import React from 'react';
import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import TransactionForm from './components/TransactionForm';
import { GlobalProvider } from './context/GlobalState';


function App(){
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm />
    </GlobalProvider>
  )
}

export default App;
import { createContext, useContext, useState, useReducer } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext()

export const useGlobalState = () =>{
    const context = useContext(Context)
    return context
}

const initialstate = {
    transactions: []
}

export const GlobalProvider = ({children}) =>{

    const [state, dispatch] = useReducer( AppReducer,initialstate )
    
    const addTransaction = (transaction)=>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction

        })
    }
    
    return (
        <Context.Provider 
        value={{transactions: state.transactions,
            addTransaction}}>
            {children}
        </Context.Provider>
    )
}
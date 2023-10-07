import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialstate={
    Transactions :  [
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    ]
}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer,initialstate);

    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id,
        })
    }
    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction,
        })
    }

    return (<GlobalContext.Provider value={
        {
            Transactions:state.Transactions,
            deleteTransaction,
            addTransaction
        }

    }>
        {children}
    </GlobalContext.Provider>);
}
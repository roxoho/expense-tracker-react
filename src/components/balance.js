import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

export const Balance = ()=>{
    const { Transactions } = useContext(GlobalContext);
    const amounts=Transactions.map(transaction => transaction.amount);
    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return (<div className="container">
        <h4>Your Balance</h4>
        <h1>${total}</h1>
        </div>
    );
}
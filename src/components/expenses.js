import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

export const Expenses = ()=>{
    const { Transactions } = useContext(GlobalContext);

    const amountsplus=Transactions.map(transaction => (transaction.amount>=0?transaction.amount:0));
    const totalplus=amountsplus.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const amountsminus=Transactions.map(transaction => (transaction.amount<0?transaction.amount:0));
    const totalminus=amountsminus.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return (
        <div className="exp-container">
            <div>
                <h4>Income</h4>
                <p className="plus">+${totalplus}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="minus">-${Math.abs(totalminus).toFixed(2)}</p>
            </div>
        </div>
    )
}
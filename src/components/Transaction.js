import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

export const Transaction = ({ transaction } )=> {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign= transaction.amount<0?'-':'+';

    return (
        <><li className={sign==="+"?'plus':'minus'}>
            {transaction.text}   <span>{sign}${Math.abs(transaction.amount)}</span> 
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete">x</button>
        </li>
        </>
    )
}
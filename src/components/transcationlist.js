
import React, {useContext} from "react";
import { GlobalContext } from "../context/globalstate";
import { Transaction } from "./Transaction";

export const TranscationList =()=>{
    const { Transactions } = useContext(GlobalContext);

    return (
      <>
        <h3>History</h3>
        <ul className="list">
          {Transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
      </>
    )
}
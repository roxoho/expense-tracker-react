import React from "react";
import { useState, useContext} from "react";
import { GlobalContext } from "../context/globalstate";

export const Add = () => {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);

    const {addTransaction}=useContext(GlobalContext);

    const handleSubmit= e =>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount : +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add Transcation</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} placeholder="Enter Text..." onChange={(e)=>setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/></label>
                    <input type="number" value={amount} placeholder="Enter Amount..." onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <button className="btn">Add</button>
            </form>
        </>
    )
}
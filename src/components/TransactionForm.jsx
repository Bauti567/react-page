import React, { useState } from "react";
import {useGlobalState} from '../context/GlobalState'

function TransactionForm(){

    const {addTransaction} = useGlobalState()

    const [description,setDescription] = useState()

    const [amount, setAmount] = useState(0)

    const onSubmit = (e) =>{
        e.preventDefault();
        addTransaction(
            description,
            amount
        )
        console.log(description,amount);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Ingresa una descriptcion"
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <input type="number" placeholder="Ingresa un monto" step="00.00"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button>
                    Añadir transaccion
                </button>
            </form>
        </div>
    )
}

export default TransactionForm;
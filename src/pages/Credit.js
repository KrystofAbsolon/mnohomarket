import { useState } from "react";

function Credit({credit, changeCredit}) { 

    const [amount, setAmount] = useState(10);

    function deposit() {
        changeCredit(amount);
    }

    return (
        <div className="container">
            <h1>Chybí vám credit? Doplňte si ho!</h1>
            <input type="number" className="form-control mb-3" placeholder="Amount" value={amount} min="1" max="10000000000" onChange={(e) => {setAmount(Number(e.target.value))}} />
            <button className="btn btn-primary" onClick={deposit}>Vložit</button>
        </div>
    )

}

export default Credit;
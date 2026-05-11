function Credit({credit, changeCredit}) { 

    function deposit10() {
        changeCredit(10);
    }

    return (
        <div className="container">
            <h1>Chybí vám credit? Doplňte si ho!</h1>
            <button className="btn btn-primary" onClick={deposit10}>Vložit 10$</button>
        </div>
    )

}

export default Credit;
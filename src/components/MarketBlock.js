function MarketBlock({ID, Name, Probability, ImageLink}) {
    return(
        <div className="bg-dark-subtle p-3">
            <img src={ImageLink} alt="error: image not found" width="200px" height="2OOpx"/>
            <h4>{Name}</h4>
            <h6>{"Pravděpodobnost: " + Probability + "%"}</h6>
            <button className="btn btn-primary">Vsadit si</button>      
        </div>
    )
}

export default MarketBlock;
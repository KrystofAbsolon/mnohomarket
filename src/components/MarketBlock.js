import {Link} from "react-router";

function MarketBlock({ID, Name, Probability, ImageLink, YesBets, NoBets}) {
    return(
        <div className="bg-dark-subtle p-3">
            <img src={ImageLink} alt="error: not found" width="650px" height="300px"/>
            <h4>{Name}</h4>
            <h6>{"Pravděpodobnost: " + Probability + "%"}</h6>
            <Link to={`/markets/${ID}`}>
                <btn className="btn btn-primary">Vsaď si</btn>
            </Link>
        </div>
    )
}

export default MarketBlock;
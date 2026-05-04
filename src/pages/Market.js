import { useParams } from "react-router";
import { useState, useEffect } from 'react';

function Market() {
    const {id} = useParams();
        const [ID, setID] = useState();
        const [Name, setName] = useState();
        const [Probability, setProbability] = useState();
        const [ImageLink, setImageLink] = useState();
        const [YesBets, setYesBets] = useState();
        const [NoBets, setNoBets] = useState();

        let yesPrice = Number(Probability)/100;
        let noPrice = +(1 - Probability / 100).toFixed(2);

    useEffect(() => {
        fetch(`http://localhost:8080/api/market?m=${id}`)
        .then(res => res.json())
        .then(data => {
            setID(data.ID);
            setName(data.Name);
            setProbability(data.Probability);
            setImageLink(data.ImageLink);
            setYesBets(data.YesBets);
            setNoBets(data.NoBets);
        });
    }, [id]);

    function incrementYes() {
        fetch(`http://localhost:8080/api/betyes/${ID}`, {
            method: "POST"
        })
        .then(res => res.json())
        .then(() => {
            setYesBets(prev => prev + 1);
        });
    }

    function incrementNo() {
        fetch(`http://localhost:8080/api/betno/${ID}`, {
            method: "POST"
        })
        .then(res => res.json())
        .then(() => {
            setNoBets(prev => prev + 1);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{Name}</h1>
                    <p>Pravděpodobnost: {Probability}%</p>
                    <p>ID trhu: {ID}</p>
                    <p>{"Bets: "}
                        <span class="green-text">
                            {YesBets} 
                        </span>
                        {" vs. "}
                        <span class="red-text">
                            {NoBets}
                        </span>
                    </p>
                    <div>
                        <button className="btn btn-success" onClick={incrementYes} style={{marginRight: 10}}>ANO({yesPrice})</button>
                        <button className="btn btn-danger" onClick={incrementNo}>NE({noPrice})</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={ImageLink} alt="error: not found" width="900px" height="600px"/>
                </div>
            </div>
        </div>
    );
}

export default Market;
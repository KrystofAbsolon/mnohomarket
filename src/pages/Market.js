import { useParams } from "react-router";
import { useState, useEffect } from 'react';

function Market() {
    const {id} = useParams();
        const [ID, setID] = useState();
        const [Name, setName] = useState();
        const [Probability, setProbability] = useState();
        const [ImageLink, setImageLink] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/api/market?m=${id}`)
        .then(res => res.json())
        .then(data => {
            setID(data.ID);
            setName(data.Name);
            setProbability(data.Probability);
            setImageLink(data.ImageLink);
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{Name}</h1>
                    <p>Pravděpodobnost: {Probability}</p>
                    <p>ID trhu: {ID}</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={ImageLink} alt="error: not found"/>
                </div>
            </div>
        </div>
    );
}

export default Market;
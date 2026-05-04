import MarketBlock from "../components/MarketBlock"

function Markets({markets}) {
    if(markets.length !== 0) {
        return (
            <div className="rounded-3 p-3">
                <div className="row g-3">
                    {markets.map((m) => (
                    <div className="col-12 col-md-6" key={m.ID}>
                        <MarketBlock
                        ID={m.ID}
                        Name={m.Name}
                        Probability={m.Probability}
                        ImageLink={m.ImageLink}
                        YesBets={m.YesBets}
                        NoBets={m.NoBets}
                        />
                    </div>
                    ))}
                </div>
            </div>
        )
    }
    else {
        return(<h3>Nic k vidění👀</h3>)
    }
}

export default Markets;
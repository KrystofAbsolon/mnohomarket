import MarketBlock from "../components/MarketBlock"

function Trending({markets}) {
    if(markets.length !== 0) {
        return (
            <div className="rounded-3 p-3">
                <div className="row g-3">
                    {markets.map((m) => (
                    <div className="col-12 col-md-6" key={m.ID}>
                        <MarketBlock
                        Id={m.ID}
                        Name={m.Name}
                        Probability={m.Probability}
                        ImageLink={m.ImageLink}
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

export default Trending;
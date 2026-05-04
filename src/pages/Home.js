import {Link} from "react-router";

function Home() {
    return(
       <div className=''>
            <p className="fw-bold glow-text display-4">Vítejte na Mnohomarketu</p>
            <p className="glow-text display-6">Vsaďte si na světové události a vydělejte těžký love díky vašim prorockým schopnostem.</p>
            <Link to="/markets">
                <btn className="btn btn-primary">Vsaď si</btn>
            </Link>
       </div>
    )
}

export default Home;
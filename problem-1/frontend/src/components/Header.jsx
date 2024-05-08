import { Link } from "react-router-dom";
import Searchtrain from "./Searchtrain";

const Header = (props) => {
    return (
        <>
            <main className="container-fulid bg-primary text-white">
                <header className="p-3 container d-flex justify-content-between">
                    <h2>John Railways</h2>
                    {!props.searchPage? <h5 className="my-auto">
                        <Link to='/searchtrain' className="text-decoration-none text-white">Search Train</Link>
                    </h5> : null}
                    {props.searchPage?  <h5 className="my-auto">
                        <Link to='/' className="text-decoration-none text-white">Go Back to Home</Link>
                    </h5> : null}
                    
                </header>
            </main>
        </>
    )
}

export default Header;
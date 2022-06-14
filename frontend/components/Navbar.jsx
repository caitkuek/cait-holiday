import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav>
        <ul>
          <Link to="/">Main</Link>
          <Link to="/holidays/">Holidays</Link>
          <Link to="/holidays/:id">Detail</Link>
        </ul>
        </nav>
        </>
    )
}

export default Navbar;
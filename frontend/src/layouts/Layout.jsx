import { Link, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App.jsx"

function Layout() {
    const [user, setUser] = useAtom(userAtom);
    console.log(user)
  return (
    <>
      <p>Hi { user.name }</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/holidays/">Holidays</Link>
          </li>
          <li>
          {user.name ? (
              <Link to="/holidays/62a94e18c4f8543ae1a7224b">Detail</Link>
            ) : null}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;


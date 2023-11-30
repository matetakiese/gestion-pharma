import NavBar from "../nav-bar/nav-bar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <h1>clients</h1>
        <nav>
            <NavBar/>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    );
}

export default Layout;
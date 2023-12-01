import { NavLink } from "react-router-dom"

function DashboardNavbar () {
    return (
        <ul>
            <li >
                <NavLink to="/AllProduct">All product</NavLink>
            </li>
            <li>
                <NavLink to="/CreateProduct">Create product</NavLink>
            </li>
            <li>
              <NavLink to="/DeleteProduct">Delete product</NavLink>
            </li>
            <li>
                <NavLink to="/UpdateProduct">Update product</NavLink>
            </li>
        </ul>
    );
}

export default DashboardNavbar;


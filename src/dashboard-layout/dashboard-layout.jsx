import DashboardNavbar from "../dashboard-navbar/dashboard-navbar"
import { Outlet } from "react-router-dom"

function DashboardLayout () {
    return (
        <>
        <h1>Dashboard</h1>
        <nav>
            <DashboardNavbar/>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    );
}

export default DashboardLayout;
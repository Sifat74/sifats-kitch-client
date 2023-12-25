import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
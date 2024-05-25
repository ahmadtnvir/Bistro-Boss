import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooterLogin = location.pathname.includes('login');
    const noHeaderFooterRegister = location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooterLogin || noHeaderFooterRegister || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooterLogin || noHeaderFooterRegister || <Footer></Footer>}
        </div>
    );
};

export default Main;
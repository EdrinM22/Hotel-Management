import SecondaryHeader from "../components/SecondaryHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function AdminLayout() {
    const navLinks = [
        { name: "Reviews", path: "/admin" },
        { name: "Add Worker", path: "/admin/addworker" },
    ]

    return (
        <div>
            <SecondaryHeader navLinks={navLinks} hasButton />
            <Outlet />
            <Footer />
        </div>
    );
}
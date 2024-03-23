import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function BookLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
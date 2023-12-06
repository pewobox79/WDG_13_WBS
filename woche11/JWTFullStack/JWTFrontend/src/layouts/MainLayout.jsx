import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <main style={{minHeight: "400px", width: "100%"}}>
            <Header />
            <Outlet />
        </main>
    )
}

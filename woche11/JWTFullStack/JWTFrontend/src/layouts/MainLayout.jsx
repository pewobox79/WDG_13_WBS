import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function MainLayout() {

    const [user, setUser] = useState("authenticated")

    return (
        <UserContext.Provider value={{ user, setUser }} >
            <main style={{ minHeight: "400px", width: "100%" }}>
                <Header />
                <Outlet />
            </main>
        </UserContext.Provider>
    )
}

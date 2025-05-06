import { createContext } from "react";

const AppContext=createContext();
import { io } from "socket.io-client";

 let socket = io("http://localhost:3000");

 export default function AppContextProvider({children}){
    let value={
    socket
    }
    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}
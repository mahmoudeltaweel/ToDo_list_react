import { createContext } from "react";
import Cookie from "cookie-universal";

const storgecontext = createContext(null);

const cookie = Cookie();

const todo = cookie.set("todo" , [])
    console.log("todo",todo);
    
export default function StorgeContext({childern}){
    return <storgecontext.Provider value={todo}>
        {childern}
    </storgecontext.Provider>
}
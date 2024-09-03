import Cookie from "cookie-universal";
import { createContext, useEffect, useState } from "react";

const cookie=Cookie();

cookie.set("datatodo",[])

export const addtodolocal = createContext([]);

console.log(addtodolocal._currentValue);


export default function DataLocalContext({children}){
const [todolocal,settodolocal]=useState([]);

    useEffect(()=>{
        if(cookie.get("datatodo").length > 0){
            addtodolocal=cookie.get("datatodo")
        }
    },[])
    
    return(
        <addtodolocal.Provider valu={todolocal}>
            {children}
        </addtodolocal.Provider>
    )
}
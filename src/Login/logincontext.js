import React, { createContext, useReducer } from "react";
import recuder, {initState} from "./reduceLogin";


export const LoginContext = createContext();


function LoginProvider({children}) {
    const [state, dispatch] = useReducer(recuder, initState)
    return ( 
        <LoginContext.Provider value ={[state, dispatch]}>
            {children}
        </LoginContext.Provider>
     );
}

export default LoginProvider;
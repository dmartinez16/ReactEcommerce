import { createContext } from "react";

const ShoppingCarContext = createContext()

export const ShoppingCarProvieder = ({children}) => {
    return(
        <ShoppingCarContext.Provider>
            {children}
        </ShoppingCarContext.Provider>
    )
}
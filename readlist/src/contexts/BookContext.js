import React, { createContext, useReducer } from 'react'
import { BookReaduer } from '../reducers/BookReducer'

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, dispath] = useReducer(BookReaduer,[ ]);
    
    return ( 
        <BookContext.Provider  value={{books, dispath}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
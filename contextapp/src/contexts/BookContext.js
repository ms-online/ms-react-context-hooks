import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([
        {title: '撒哈拉的故事',id:1},
        {title: '梦里花落知多少',id:2},
        {title: '雨季不再来',id:3},
    ])
    return ( 
        <BookContext.Provider value ={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
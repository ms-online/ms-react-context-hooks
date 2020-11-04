import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: '倾城之恋', author: '张爱玲', id: 1 },
        { title: '梦里花落知多少', author: '三毛', id: 2 },
        { title: '面包树上的女人', author: '张小娴', id: 3 },
    ]);
    const addBook = (title,author) => {
        setBooks([...books, { title, author}]);
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return ( 
        <BookContext.Provider  value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
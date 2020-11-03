import React, { Component } from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>撒哈拉的故事</li>
                    <li>梦里花落知多少</li>
                    <li>雨季不再来</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;
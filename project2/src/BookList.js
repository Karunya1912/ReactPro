// BookList.js
import React, { useState, useEffect } from 'react';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate an API call
    const fetchBooks = async () => {
      const fetchedBooks = [
        { id: 1, memberId: "2763455", memberName: "ZULAN Obar", title: "QUANTUM COMPUTE...", author: "CHRIS EINSTEIN", due: "2 days", returnDate: "Mar 8th, 2022" },
        { id: 2, memberId: "2763455", memberName: "ZULAN Obar", title: "QUANTUM COMPLI...", author: "CHRIS EINSTEIN", due: "2 days", returnDate: "Mar 9th, 2022" },
        { id: 3, memberId: "2763455", memberName: "ZULAN Obar", title: "QUANTUM COMPUTE...", author: "CHRIS EINSTEIN", due: "2 days", returnDate: "Mar 10th, 2022" },
        // Add more books as needed
      ];
      setBooks(fetchedBooks);
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{book.memberId}</td>
              <td>{book.memberName}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.due}</td>
              <td>{book.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

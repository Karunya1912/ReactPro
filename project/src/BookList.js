// BookList.js
import React, { useState, useEffect } from 'react';
import './BookList.css';
import Cover from './Images/Cover.jpg';
function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate an API call
    const fetchBooks = async () => {
      const fetchedBooks = [
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", availability: 3 },
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", availability: 2 },
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", availability: 0 },
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", availability: 2 },
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
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Publication Date</th>
            <th>ISBN</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td><img src={Cover} alt="cover" /></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.date}</td>
              <td>{book.isbn}</td>
              <td>{book.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

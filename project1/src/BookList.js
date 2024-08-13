// BookList.js
import React, { useState, useEffect } from 'react';
import './BookList.css';
import Cover from './Images/Cover.jpg';
import { FaTrash } from 'react-icons/fa'; // Importing trash icon

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate an API call
    const fetchBooks = async () => {
      const fetchedBooks = [
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", status: "Accepted" },
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", status: "Pending" },
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", status: "Rejected" },
        { title: "Basic Linear Algebra", author: "B.S. Blyth", publisher: "Springer-Verlag", date: "September 2018", isbn: "978-3-319-77535-9", status: "Accepted" },
      ];
      setBooks(fetchedBooks);
    };

    fetchBooks();
  }, []);

  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Publication Date</th>
            <th>ISBN</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td><img src={Cover} alt="Book Cover" /></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.date}</td>
              <td>{book.isbn}</td>
              <td style={{ color: book.status === 'Accepted' ? 'green' : book.status === 'Pending' ? 'orange' : 'red' }}>
                {book.status}
              </td>
              <td>
                <button onClick={() => handleDelete(index)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

// App.js
import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css'; // Import the CSS file for the main layout

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <BookList />
        {/* Other components go here */}
      </div>
    </div>
  );
};

export default App;

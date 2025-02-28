// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
const Home = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="home-container">
      <h1>📚 Book Library</h1>
      
      {/* Add Book Button */}
      <button
        onClick={() => navigate("/add-book")} // Navigate to AddBook page
        className="add-book-button"
      >
        ➕ Add Book
      </button>

      {/* Display Books */}
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
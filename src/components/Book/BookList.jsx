import { useEffect, useState } from "react";

import Book from "./Book";
import "./BookList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookList(props) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);

  const navigate = useNavigate();
  async function allbooks() {
    const books = await axios.get("http://localhost:9090/api/books");
    console.log(books.data);
    setBooks(books.data);
  }
  useEffect(() => {
    allbooks();
  }, []); // empty dependency array ensures this effect runs only once on component mount
  function deleteBook(id) {
    if (window.confirm("Are you sure you want to delete")) {
      axios
        .delete(`http://localhost:9090/api/books/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
      allbooks();
    }
  }

  function searchBooks(keyword) {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearch(filteredBooks);
  }

  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => searchBooks(e.target.value)}
      />
      {/* <button onClick={() => navigate("/books/new")}>Nouveau livre</button> */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Athor</th>
            <th>Publication date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {search.length > 0
            ? search.map((b, index) => {
                return <Book key={index} book={b} onDelete={deleteBook} />;
              })
            : books.map((b, index) => {
                return <Book key={index} book={b} onDelete={deleteBook} />;
              })}
        </tbody>
      </table>
    </>
  );
}

export default BookList;

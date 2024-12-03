import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = {
      title: title,
      price: price,
      author: author,
    };
    await axios.post("http://localhost:9090/api/books", book);
    navigate("/books");
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="tipricetle"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="author">Autheur</label>
        <input
          type="text"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <input type="submit" />
        <input type="reset" />
      </form>
    </>
  );
}

export default BookForm;

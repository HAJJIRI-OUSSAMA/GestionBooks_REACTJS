import axios from "axios";
function Book({ book, onDelete }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.price}</td>
      <td>{book.author}</td>
      <td>{book.date_publication}</td>
      <td>
        <button onClick={() => onDelete(book._id)}>DELETE</button>
        <button onClick={() => onDelete(book._id)}>Edit</button>

        <button onClick={() => onDelete(book._id)}>Details</button>
      </td>
    </tr>
  );
}

export default Book;

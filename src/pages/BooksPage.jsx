import BookForm from "../components/Book/BookForm";
import BookList from "../components/Book/BookList";

function BooksPage() {
  return (
    <>
      <div>
        <h1>Book Page</h1>
        <p>Welcome to the book page!</p>
        <BookList />
        <BookForm />
      </div>
    </>
  );
}

export default BooksPage;

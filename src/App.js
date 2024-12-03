import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import OrdersPage from "./pages/OrdersPage";
import CostumerPage from "./pages/CostumerPage";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/costumer" element={<CostumerPage />} />
      </Routes>
    </div>
  );
}

export default App;

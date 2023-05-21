import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./Pages/Product";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";
import IndexPage from "./Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

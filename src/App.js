import "./styles.css";
import Home from "./pages/home/Home";
import Header from "./components/header/hindex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpense from "./pages/add-expense/AddExpense";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" exact element={<AddExpense />} />
        </Routes>
        <div>footer</div>
      </Router>
    </div>
  );
}

export default App;

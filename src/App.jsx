import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Hats = () => {
  return <h1>Hats</h1>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="/shop" element={<h1>Shop</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import "./app.styles.scss";
import Header from "./components/header/header.component";
import Auth from "./pages/auth/auth.component";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

const Hats = () => {
  return <h1>Hats</h1>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/hats" element={<Hats />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

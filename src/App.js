import React from 'react';
import './styles.css';
import './normalize.css';
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home Page</h1>
    </div>
  );
}

export default App;

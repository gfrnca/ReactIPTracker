// General
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CSS
import GlobalStyle from "./styles/global.js";

// Components
import Home from "./pages/Home/Home.jsx";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

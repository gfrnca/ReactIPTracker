import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

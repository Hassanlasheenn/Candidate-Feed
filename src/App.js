import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/pages/Login";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="log-in"
          element={<Login title="Log in | Contra" />}
        />
      </Routes>
    </div>
  );
}

export default App;

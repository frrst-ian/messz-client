import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
// import { UserContext } from "./context/UserContext";
// import { useContext } from "react";

const App = () => {
  // const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <div className="app">
        <Nav></Nav>
        <main className="main">
          <AppRoutes></AppRoutes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

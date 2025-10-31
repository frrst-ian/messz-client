import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="main">
          <AppRoutes></AppRoutes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import "./styles/App.css";
import Sidebar from "./components/presenters/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/*<Sidebar  />*/}
        <main className="main">
          <AppRoutes></AppRoutes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

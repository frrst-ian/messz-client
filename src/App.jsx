import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="main">
          <AppRoutes></AppRoutes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

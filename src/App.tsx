import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesComponent from "./Routes/RoutesComponent";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <>
      <h1>This is app main page </h1>
      <NavBar />
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </>
  );
}

export default App;

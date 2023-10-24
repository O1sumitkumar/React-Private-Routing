import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesComponent from "./Routes/RoutesComponent";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <RoutesComponent />
    </>
  );
}

export default App;

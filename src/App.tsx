import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

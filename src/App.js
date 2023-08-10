import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Burgers from "./pages/Burgers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Burgers/>}/>
              <Route path="/adding" element={ <Adding/>}/>
              <Route path="/update" element={ <update/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

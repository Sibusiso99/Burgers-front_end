import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Add from "./pages/Add";
import Update from "./pages/Update";
import Burgers from "./pages/Burgers";
import "../src/styles.css"

function App(){
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route path="/burgers"  element={<Burgers/>}/>
              <Route path="/add"  element={<Add/>}/>
              <Route path="/update/:id"  element={<Update/>}/>
          </Routes>

       </BrowserRouter>
    </div>
  )
}

export default App;
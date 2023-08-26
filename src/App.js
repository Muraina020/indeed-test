import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./components/Dashboard";
// import Dashboard from "./pages/Dashboard";
//   import List from "./pages/list/List";



function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/Landing" element={<Landing/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      {/* <Route path="/hotels/:id" element={<Relax/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;

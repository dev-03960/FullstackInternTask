import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;


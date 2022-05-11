import "./App.css";
import Main from "./components/Main/Main";
import Test from "./components/Test/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route exact path="/Test" element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

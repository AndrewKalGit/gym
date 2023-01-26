import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Banner from './Banner'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<><Banner></Banner></>}></Route>
          <Route path='/about' element={<><About></About></>}></Route>
          <Route path='/' element={<></>}></Route>
          <Route path='/' element={<></>}></Route>
          <Route path='/' element={<></>}></Route>
          <Route path='/' element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

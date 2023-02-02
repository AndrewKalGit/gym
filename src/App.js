import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import Staff from './Staff';
import Program from './Program';
import Schedule from './Schedule';
import Contact from './Contact';

//react helmet
//production build
//insert logo 
//customize design if needed
//email js 
//drop down for schedule to show other locations
//embedded iframe for google maps 
//sign up confirmation 
// production build for tailwind.css
// production build for react.js
// fix the padding on contact and the alignment of texts

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<><Banner></Banner></>}></Route>
          <Route path='/about' element={<><About></About><Staff></Staff></>}></Route>
          <Route path='/program' element={<><Program></Program></>}></Route>
          <Route path='/schedule' element={<><Schedule></Schedule></>}></Route>
          <Route path='/contact' element={<><Contact></Contact></>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

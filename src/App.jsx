import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/*' element={"ERROR"}/>
    </Routes>

    <Footer/>
    </>
  );
}

export default App;

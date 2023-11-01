
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Sign from './pages/Sign';
import Login from './pages/Login';
import CourseList from './pages/Course/CourseList';


function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/course' element={<CourseList/>}></Route>
      <Route path='/sign' element={<Sign/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
      
    </>
  );
}

export default App;

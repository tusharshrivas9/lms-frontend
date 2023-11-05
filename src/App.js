
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Sign from './pages/Sign';
import Login from './pages/Login';
import CourseList from './pages/Course/CourseList';
import Contact from './pages/Contact';
import Denied from './pages/Denied';
import CourseDescription from './pages/Course/CourseDescription';


function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/course' element={<CourseList/>}></Route>
      <Route path='/course/description' element={<CourseDescription/>}></Route>
      <Route path='/sign' element={<Sign/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/denied' element={<Denied/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
      
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Crud from './components/CRUD/Crud';
import Activity from './components/Activity/Activity';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/Home" element={<Home></Home>}></Route>
        <Route path ="/Crud" element={<Crud></Crud>}></Route>
        <Route path ="/Activity" element={<Activity></Activity>}></Route>
        <Route path ="/About" element={<About></About>}></Route>
        <Route path ="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;

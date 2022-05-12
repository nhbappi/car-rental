
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Reviews from './Component/Reviews/Reviews';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;

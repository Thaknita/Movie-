
import './App.css';
import 'flowbite';
import 'flowbite/dist/flowbite';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages';
import NotFound from './components/404';
import Nav from './components/Nav';
import Playingpage from './pages/playingpage';
import Searchpage from './pages/searchpage';
import Trending from './pages/trending';
import Detail from './pages/detail';



function App() {

  
  return (
    <Routes >
      <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/trending' element={<Trending/>}/>
              <Route path='/search' element={<Searchpage/>} />
             
      </Route>
      <Route path='/detail' element={<Detail/>} />
      <Route path='/playingpage' element={<Playingpage />   }/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
  
}

export default App;

function MainLayout(){
  
  return(
    <>
    
      <Nav />
      <Outlet />
     
    </>
  )
}

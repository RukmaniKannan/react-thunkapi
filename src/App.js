
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Demo from './Component/Demo';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Create from './Component/Create';
import Read from './Component/Read';
// import CreatePost from './Component/CreatePost';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AtherPageNotFount from './Component/AtherPageNotFount';


function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Demo name="Text"/>}/> */}
      <Route path="/" element={<Create/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="*" element={<AtherPageNotFount/>}/>

      {/* <Route path="/createpost" element={<CreatePost/>}/> */}



      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

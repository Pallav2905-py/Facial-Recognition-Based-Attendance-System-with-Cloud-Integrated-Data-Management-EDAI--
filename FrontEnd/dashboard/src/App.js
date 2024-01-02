import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendence from './Components/Attendence';
function App() {
  return (
    <>
    {/* <Login/> */}

    <BrowserRouter>    
     <Routes>
       <Route exact path='/' element={<Login></Login>}/>
       {/* <Route exact path='/' element={<Attendence></Attendence>}/> */}
       {/* <Route exact path='/sicence' element={<News setProgress={this.setProgress} key={"science"} pageSize={6} country={"in"} category={"sicence"}></News>}/>
       <Route exact path='/health' element={<News setProgress={this.setProgress} key={"health"} pageSize={3} country={"in"} category={"health"}></News>}/> */}
  
     </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;

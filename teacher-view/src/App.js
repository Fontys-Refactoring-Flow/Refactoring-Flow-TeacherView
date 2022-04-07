import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Components/Header'
import Assignments from './Pages/Assignments'
import Classes from './Pages/Classes';
import EditClass from './Pages/EditClass';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/assignments' element={<Assignments/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/editclass' element={<EditClass/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

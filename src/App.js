import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import history from './history';
import Home from './Pages/Home'
import Header from './Components/Header'
import Assignments from './Pages/Assignments'
import Classes from './Pages/Classes';
import EditClass from './Pages/EditClass';
import AddAssignment from './Pages/AddAssignment'
import StudentProgressPage from './Pages/StudentProgressPage'
import StudentProgressDetailPage from './Pages/StudentProgressDetailPage';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/assignments' element={<Assignments/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/editclass' element={<EditClass/>}/>
          <Route path='/addAssignment' element={<AddAssignment/>}/>
          <Route path='/progress' element={<StudentProgressPage/>}/>
          <Route path='/progressDetail' element={<StudentProgressDetailPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

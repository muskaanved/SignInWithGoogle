import './App.css';
import Dashboard from './componets/dashboard';
import Email from './componets/email';
import Sidebar from './componets/sidebar';
import GoogleLogin from './componets/googleLogin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
          <div className='sidebar'>
              <Sidebar/> 
          </div> 
         
          <Router>
          <Routes>
                 <Route exact path='/' element={< Dashboard />}></Route>
                 <Route exact path='/email' element={< Email />}></Route>
                 <Route exact path='/GoogleLogin' element={<GoogleLogin/>}></Route>
          </Routes>
          </Router>
    </div>
  );
}

export default App;

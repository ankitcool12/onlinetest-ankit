import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Exam from './components/Exam';
import Organization from './components/Organization';
import User from './components/User';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Exam/>}/>
                    <Route path="/User" element={<User/>}/>
                    <Route path="/Organization" element={<Organization/>}/>
                  
                   
                </Routes>

            </div>
        </Router>

    );
};

export default App;

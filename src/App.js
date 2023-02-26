
import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom"
import DigiInfo from './component/DigiInfoPage/DigiInfo';
import DigiAllow from './component/digiAllow/DigiAllow';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Jobs from './pages/jobs/Jobs'
import Training from './component/training/Training';
import Library from './pages/Library/Library'
import Profie from './pages/profile/Profie';
import Resume from './pages/resume/Resume'
import Provider from './pages/ProviderLanding/Provider';
import Orgsign from './pages/organization/Orgsign'
// import Nav from './component/Nav/Nav';
function App() {
  return (
   <>
 <Router>
  {/* <HashRouter> */}

    <Routes>
    <Route exact path="/" element={ <Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup/conf" element={<DigiInfo />} />
          <Route path='/signup/link' element={<DigiAllow />} />
         <Route path="/signup" element={<Signup/>} />
         <Route exact path="/dash" element={<Dashboard/>}/>
         <Route exact path="/dash/jobs"element={<Jobs/>}/>
         <Route exact path="/dash/training" element={<Training/>}/>
         <Route exact path="/dash/library" element={<Library/>}/>
         <Route exact path="/dash/profile" element={<Profie/>}/>
         <Route exact path="/dash/resume" element={<Resume/>}/>
         <Route exact path='/provider' element={<Provider/>}/>
         <Route exact path="/sign/org" element={<Orgsign/>}/>
    </Routes>
  {/* </HashRouter> */}
   </Router>      
   </>
  );
}

export default App;
 
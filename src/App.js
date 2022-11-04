import './App.css';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Infrastructure from "./pages/Infrastructure";
import SatelitePlugins from "./pages/SatelitePlugins";
import TeamMoodle from "./pages/TeamMoodle";
import UsersService from "./pages/UsersService";
import PluginLifecycle from "./pages/PluginLifecycle";
import Home from "./pages/Home";
import MoodleLifeCycle from "./pages/MoodleLifeCycle";
import IntegralProcess from "./pages/IntegralProcess";

function App() {
    return (
     <>
         <header className="App-header">

         </header>
         <BrowserRouter>
             <Navbar />
             <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/home' element={<Home/>}/>
                 <Route path='/infrastructure' element={<Infrastructure/>}/>
                 <Route path='/satelite-plugins' element={<SatelitePlugins/>}/>
                 <Route path='/team-moodle' element={<TeamMoodle/>}/>
                 <Route path='/users-service' element={<UsersService/>}/>
                 <Route path='/plugin-lifecyle' element={<PluginLifecycle/>}/>
                 <Route path='/moodle-lifecyle' element={<MoodleLifeCycle/>}/>
                 <Route path='/integral-process' element={<IntegralProcess/>}/>
             </Routes>
         </BrowserRouter>
     </>
    );
}
export default App;

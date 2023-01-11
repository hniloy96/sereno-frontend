import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home-page';
import Profile from './Pages/Profile-page';
import Feed from './Pages/Feed-page';
import SIGNUP from './Pages/Sign-upAuth';
import LOGIN from './Pages/Log-inAuth';

import { UserContext } from './data';
import { useState } from 'react'
console.log(UserContext)

function App() {
    const { Provider : UserInfo } = UserContext

    const [ isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className='App'>
      <UserInfo value={{
        isAuthenticated, 
        currentUser,
        setAuth: setIsAuthenticated,
        setUser: setCurrentUser
      }}>
      <div className="page">
         <Routes>
         <Route path="/" element={<LOGIN />} />
          <Route path='/signup' element={ < SIGNUP />} />
          <Route path='/home' element={< Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      </UserInfo>
    </div>
    
  );
}

export default App;

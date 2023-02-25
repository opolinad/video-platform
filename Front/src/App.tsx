import React from 'react';
import CardContainer from './components/CardContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateVideo from './components/CreateVideo';
import VideoDetails from './components/VideoDetails';
import UserDetails from './components/UserDetails';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <CardContainer /> } />
        <Route path='/createVideo' element={ <CreateVideo /> } />
        <Route path='/video/:videoId' element={ <VideoDetails /> } />
        <Route path='/user/:userId' element={ <UserDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

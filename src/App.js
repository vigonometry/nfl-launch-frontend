import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import HomePage from './views/HomePage/HomePage';
import { Route, Routes } from 'react-router';
import AboutPage from './views/AboutPage/AboutPage';
import VisionPage from './views/AboutPage/VisionPage';
import FriendsPage from './views/AboutPage/FriendsPage';
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about/ourvision' element={<VisionPage />} />
        <Route path='/about/fof' element={<FriendsPage />} />
        <Route path='/events' element={<></>} />
        <Route path='/partners' element={<></>} />
        <Route path='/donate' element={<></>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

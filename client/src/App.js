// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Profile from './pages/Profile';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import NavBar from '../src/components/NavBar';
import Purchases from './pages/Purchases';
import ItemDetails from './components/ItemDetails';
const theme = extendTheme({
   styles: {
      global: () => ({
         body: {
            bg: '#EDEDED'
         }
      })
   }
});

function App() {
   return (
      <>
         <ChakraProvider theme={theme}>
            <NavBar />
            <Routes>
               <Route path="/Profile" element={<Profile />} />
               <Route path="/my_purchases" element={<Purchases />} />
               <Route path="/my_purchases/:id" element={<ItemDetails />} />
               <Route path="*" element={<Navigate to="/Profile" replace />} />
            </Routes>
         </ChakraProvider>
      </>
   );
}

export default App;

import { Input, InputRightAddon, InputGroup } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { SearchIcon } from '@chakra-ui/icons';
import mainLogo from '../img/mercado-libre-logo-6.png';
import '../styles/navbar.css';

const NavBar = () => {
   return (
      <>
         <header>
            <nav>
               <img src={mainLogo} style={{ width: 134, height: 34, marginLeft: '-10rem' }} alt="mercadoLibre" />
               <InputGroup size="sm">
                  <Input placeholder="Busca productos, marcas y más..." size="sm" style={{ backgroundColor: 'white', border: 'none', width: '35rem', height: '2.4rem', marginTop: '-2rem' }} />
                  <InputRightAddon style={{ backgroundColor: 'white', marginTop: '-2rem', height: '2.45rem' }} children={<SearchIcon />} />
                  <Link to={"/my_purchases"} style={{ fontSize: '13px', marginLeft: '8rem', color: '#292A28' }}>Mis Compras</Link>
               </InputGroup>
            </nav>
         </header>
      </>
   );
};

export default NavBar;

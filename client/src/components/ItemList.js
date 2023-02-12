import { useFetch } from '../hooks/useFetch';
import { VStack, Spinner } from '@chakra-ui/react';
import Item from './Item';

const ItemList = () => {
   const { data, loading } = useFetch('/purchases/1');
   const allPurchases = data?.data.data;
   const spinner = <Spinner thickness="4px" emptyColor="gray.200" color="blue.500" size="xl" />;
 
   return (
      <>
         <VStack spacing={5} marginTop={10}>
            {loading
               ? spinner
               : allPurchases?.map((x) => {
                    return <Item key={x.id_compra} 
                                 idCompra={x.id_compra} 
                                 titulo={x.titulo} 
                                 precio={x.precio} 
                                 cantidad={x.cantidad} 
                                 fecha={x.fecha} 
                                 />;
                 })}
         </VStack>
      </>
   );
};

export default ItemList;

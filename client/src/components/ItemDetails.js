import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { formatter, parseDate } from '../utils/utils';
import ShipmentAndPayment from './ShipmentAndPayment';
import { Card, CardBody, Text, Th, Tr, Td, Avatar, Table, Thead, Flex, Tbody, TableContainer, TableCaption, Box, Spinner, SimpleGrid, Divider, Heading } from '@chakra-ui/react';

const ItemDetails = () => {
   const [details, setDetails] = useState([]);
   const { data, loading } = useFetch('/purchases/1');
   const allPurchases = data?.data.data;
   const { id } = useParams();
   const { titulo, cantidad, imagen, precio, id_compra, fecha, id_transaccion, id_envio, vendedor } = details || {};
   const spinner = <Spinner thickness="4px" emptyColor="gray.200" color="blue.500" size="xl" />;

   //Match endpoint response id with routed id
   useEffect(() => {
      allPurchases?.forEach((purchase) => {
         if (purchase.id_compra === parseInt(id)) {
            setDetails(purchase);
         }
      });
   }, [id, allPurchases]);

   return (
      <>
         <Flex>
            <Box p="2rem 10rem 30rem 17rem" bg="#EDEDED">
               <SimpleGrid spacing={6}>
                  <Card marginLeft={'4rem'} variant={'filled'} marginTop={'3rem'} width={'47rem'} height={'5rem'}>
                     <CardBody>
                        {loading ? (
                           spinner
                        ) : (
                           <>
                              <Text style={{ fontSize: '13px' }}>{titulo}</Text>
                              <Text style={{ fontSize: '13px', color: 'rgba(0,0,0,.55)' }}>{cantidad > 1 ? `${cantidad} unidades` : `${cantidad} unidad`}</Text>
                              <Avatar size={'lg'} objectFit="cover" style={{ marginLeft: '40rem', marginTop: '-3.3rem' }} src={imagen} alt="compra" />
                           </>
                        )}
                     </CardBody>
                  </Card>
                  <Card width={'47rem'} marginLeft={'4rem'}>
                     <Heading fontSize={13} padding={'12px'}>
                        Vendedor
                     </Heading>
                     <Divider />
                     <CardBody>
                       {loading ? spinner : <Text fontSize={14}>{vendedor?.nickname}</Text>} 
                     </CardBody>
                  </Card>
               </SimpleGrid>
            </Box>
            <Box marginLeft={'-7rem'} p="1rem 38.5rem 15rem 4rem" bg="#F5F5F5">
               <TableContainer>
                  <Table variant="simple">
                     <TableCaption style={{ marginTop: '-8rem', marginLeft: '-8.7rem', fontSize: '14px', color: 'rgba(0,0,0,.55)' }}>
                        {fecha && parseDate(fecha)} | #{id_compra}
                     </TableCaption>
                     <Thead >
                        <Tr>
                           <Th>Detalle de la compra</Th>
                        </Tr>
                     </Thead>
                     {loading ? (
                        spinner
                     ) : (
                        <Tbody> 
                           <Tr>
                              <Td fontSize="14px" color="rgba(0,0,0,.55)">
                                 Producto
                              </Td>
                              <Td fontSize="14px" color="rgba(0,0,0,.55)" isNumeric>
                                 {formatter.format(precio?.total)}
                              </Td>
                           </Tr>
                           <Tr>
                              <Td fontSize="14px" color="rgba(0,0,0,.55)" fontWeight="bold">
                                 Total
                              </Td>
                              <Td color="rgba(0,0,0,.55)" fontWeight="bold" isNumeric>
                                 {formatter.format(precio?.total)}
                              </Td>
                           </Tr>
                        </Tbody>
                     )}
                  </Table>
               </TableContainer>
               <ShipmentAndPayment idTransaccion={id_transaccion} idEnvio={id_envio} />
            </Box>
         </Flex>
      </>
   );
};

export default ItemDetails;

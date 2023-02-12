import { Card, CardBody, Text, Box, Collapse, useDisclosure, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useFetch } from '../hooks/useFetch';

const ShipmentAndPayment = ({ idTransaccion, idEnvio }) => {
   const { data, loading: loadingPayment } = useFetch(idTransaccion && `/payment/${idTransaccion}`);
   const { data: data2, loading: loadingShipment } = useFetch(idEnvio && `/shipment/${idEnvio}`);
   const paymentInfo = data?.data.data.estado;
   const shipmentInfo = data2?.data.data.estado;
   const spinner = <Spinner thickness="4px" emptyColor="gray.200" color="blue.500" size="xl" />;
   const { isOpen, onToggle } = useDisclosure();

   return (
      <>
         <span onClick={onToggle} style={{ marginLeft: '25px', fontSize: '14px', color: '#3483fa', fontWeight: '600', cursor: 'pointer' }} >Detalles del pago y envío </span>
         <Collapse in={isOpen} animateOpacity>
            <Box p="40px" color="white" mt="4" bg="#F5F5F5" rounded="md" shadow="md">
               <SimpleGrid spacing={4}>
                  <p style={{ color: '#323232', fontSize: '14px'}}>Pago</p>
                  {loadingPayment ? (
                     spinner
                  ) : (
                     <Card variant={'filled'} border={'solid 1px lightgray'}>
                        <CardBody>
                           <Text style={{ color: paymentInfo === 'realizada' ? '#00a650' : 'red', fontSize: '12px', fontWeight: 'bold' }}>{paymentInfo}</Text>
                        </CardBody>
                     </Card>
                  )}

                  <p style={{ color: '#323232', fontSize: '14px' }}>Envío</p>
                  {loadingShipment ? (
                     spinner
                  ) : (
                     <Card variant={'filled'} border={'solid 1px lightgray'}>
                        <CardBody>
                           <Text style={{ color: shipmentInfo === 'entregado' ? '#00a650' : 'red', fontSize: '12px', fontWeight: 'bold' }}>{shipmentInfo}</Text>
                        </CardBody>
                     </Card>
                  )}
               </SimpleGrid>
               <Text count={1} />
            </Box>
         </Collapse>
      </>
   );
};

export default ShipmentAndPayment;

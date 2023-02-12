import { Card, Text, Button, Heading, CardBody, Divider, CardHeader } from '@chakra-ui/react';
import { formatter, parseDate } from '../utils/utils';
import { Link } from 'react-router-dom';

const Item = (props) => {
   const { idCompra, titulo, precio, cantidad, fecha } = props;

   return (
      <>
         <Card width={'75rem'} height={'12rem'}>
            <CardHeader>
               <Heading fontSize={13}>{parseDate(fecha)}</Heading>
               <Divider />
            </CardHeader>
            <CardBody>
               <Text>#{idCompra}</Text>
               <Text color={'rgba(0,0,0,.55)'} fontWeight={'bold'}>
                  Precio: {formatter.format(precio.total)}
               </Text>
               <Text color={'rgba(0,0,0,.55)'} fontSize={14}>
                  {titulo}
               </Text>
               <Text color={'rgba(0,0,0,.55)'} fontSize={14}>
                  {cantidad} {cantidad > 1 ? 'unidades' : 'unidad'}
               </Text>
               <Link to={`/my_purchases/${idCompra}`}>
                  <Button
                     style={{
                        width: '160px',
                        height: '32px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'white',
                        backgroundColor: '#3483FA',
                        marginLeft: '62rem',
                        margin: '-8rem 0 2rem 62rem'
                     }}
                  >
                     Ver Compra
                  </Button>
               </Link>
            </CardBody>
         </Card>
      </>
   );
};

export default Item;

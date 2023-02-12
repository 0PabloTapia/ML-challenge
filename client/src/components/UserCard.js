import { Card, CardHeader, CardBody, Avatar, Text, Heading, Spinner } from '@chakra-ui/react';
import { useFetch } from '../hooks/useFetch';

const UserCard = () => {
   const { data: userData, loading: userLoading } = useFetch('/user');
   const { data: restrictionsData, loading: restrictionsLoading } = useFetch('/restrictions/1');
   const restrictions = restrictionsData?.data.data ?? [];
   const restrictionsMessage = restrictions[0]?.mensaje;
   const user = userData?.data;
   const { nombre, apellido, imagen, nivel } = user || {};
   const spinner = <Spinner thickness="4px" emptyColor="gray.200" color="blue.500" size="lg" />;

   return (
      <>
         <Card style={{ width: '44.5rem', height: '7rem', alignItems: 'center', margin: '0 auto', marginTop: '1.5rem' }}>
            <>
               {userLoading ? (
                  spinner
               ) : (
                  <CardHeader>
                     <Avatar size={'lg'} objectFit="cover" style={{ marginLeft: '-21rem' }} src={imagen} alt="MELI-LOGO" />
                     <Heading size="md" style={{ margin: '-70px 20px 0px -250px' }}>
                        {nombre} {apellido}
                     </Heading>
                  </CardHeader>
               )}
               <CardBody>
                  <Text style={{ margin: '-35px 0px 0px -132px' }}>{nivel} - Mercado Puntos</Text>
                  {restrictionsLoading ? spinner : <Text style={{ marginLeft: '-8.2rem', color: '#FF7733' }}>{restrictionsMessage}</Text>}
               </CardBody>
            </>
         </Card>
      </>
   );
};

export default UserCard;

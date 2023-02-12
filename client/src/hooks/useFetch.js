import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

export const useFetch = (url) => {
   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);
   let toast = useToast();

   useEffect(() => {
      setLoading(true);
      axios
         .get(url)
         .then((res) => {
            setData(res);
            setLoading(false);
         })
         .catch((error) => {
            const errorInfo = error.response.data.data;
            return toast({
               title: 'Error',
               description: errorInfo,
               status: 'error',
               duration: 5000,
               isClosable: true
            });
         });
   }, [url, toast]);

   return { data, loading };
};

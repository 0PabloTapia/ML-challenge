const formatter = new Intl.NumberFormat('CLP', {
   style: 'currency',
   currency: 'CLP'
});

const parseDate = (newDate) => {
   const date = new Date(newDate);
   let dt = date.getDate();

   const formatter = new Intl.DateTimeFormat('cl', { month: 'long' });
   const month2 = formatter.format(new Date(newDate));

   if (dt < 10) {
      dt = '0' + dt;
   }

   return `${dt} de ${month2}`;
};

export { formatter, parseDate };

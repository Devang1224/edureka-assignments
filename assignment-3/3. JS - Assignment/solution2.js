const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };

  // total number of orders

  let total=0;
  for(let x in orderData)
   {
     total+= orderData[x];
   }
   console.log(total);

   const  proportion= Object.keys(orderData);
   console.log(proportion);


  const result=[];
  let i=1;
  for(let x in orderData)
   {
     result.push({
        id: i,
        order: 'x',
        orderPercentage: (((orderData[x]) / total) * 100).toFixed(2),
        restraunt: 'Punjabi Tadka'
     })
   }

   console.log(result);
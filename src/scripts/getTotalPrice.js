import readFileDB from '../utils/readFileDB.js';

const getTotalPrice = async () => {
  const data = await readFileDB();
  const dataCounter = await data.reduce((acc, currentVal) => {
    return acc + Number(currentVal.price);
  }, 0);
  console.log(dataCounter);
  return dataCounter;
};
console.log(getTotalPrice());

// повертати загальну
// вартість продуктів
// в масиві

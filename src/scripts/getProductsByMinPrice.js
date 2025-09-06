import readFileDB from '../utils/readFileDB.js';
import { log } from 'node:console';

const getProductsByMinPrice = async (price) => {
  const data = await readFileDB();
  //   data.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   }, price);
  // data.map((product) => product.price {
  //     if(product.price >= price){

  //    }
  // })
  const filterData = data.filter((product) => product.price >= price);
  log(filterData);
  return filterData;
};
console.log(getProductsByMinPrice(956));
//  повертати масив продуктів
//  вартість яких дорівнює або
//  перевищує значення параметра
// функції.

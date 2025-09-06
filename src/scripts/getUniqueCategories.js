import { log } from 'node:console';
import readFileDB from '../utils/readFileDB.js';

const getUniqueCategories = async () => {
  const data = await readFileDB();
  const getCategoryData = data.map((data) => data.category);
  const uniqueCategoriesOfData = new Set(getCategoryData);
  const uniqueCategory = [...uniqueCategoriesOfData];
  return uniqueCategory;
};
log(getUniqueCategories());
// повертати масив
// унікальних категорій

import { createFakeProduct } from '../utils/createFakeProducts.js';
import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { log } from 'node:console';
import readFileDB from '../utils/readFileDB.js';

export default async function generateProducts(number) {
  const data = await readFileDB();

  for (let i = 0; i < number; i++) {
    data.push(createFakeProduct());
  }

  log(data);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf8');
    log('Secces write array in DB file');
  } catch (error) {
    log('WENT WRONG IN WRITE ARRAY IN DB FILE', error);
  }
}

generateProducts(2);

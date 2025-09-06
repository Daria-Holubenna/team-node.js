import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { log } from 'node:console';

export default async function readFileDB() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    log('succes read db file');
    if (!data.trim()) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    log('WENT WRONG IN read DB file', error);
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

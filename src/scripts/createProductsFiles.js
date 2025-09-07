import { log } from 'node:console';
import { PATH_FILES_DIR } from '../constants/products.js';
import readFileDB from '../utils/readFileDB.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const createProductsFiles = async () => {
    try {
        const data = await readFileDB();
        // const countOfProducts = data.length;
        // log(countOfProducts);
        for (const product of data) {
            const changeFileName = product.name.replaceAll(' ', '-');
            const fileName = `${changeFileName}.json`;
            const filePath = path.join(PATH_FILES_DIR, fileName);
            const productString = JSON.stringify(product, null, 2);
            await fs.writeFile(filePath, productString, 'utf8');
            log(`Success create file ${fileName}`);
        }
    } catch (error) {
        log('Error of create files', error);
    }
};
log(createProductsFiles());
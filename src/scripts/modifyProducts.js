import readFileDB from '../utils/readFileDB.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { log } from 'node:console';

const modifyProducts = async () => {
    try {
        const products = await readFileDB();
        log(products);
        if (!products.length) {
            log('nothing to delete');
            return;
        }
    let keyWasDeleted = false;
        const deleteProductKey = products.map((product)=>{
            if('description' in product){
                keyWasDeleted = true;
                 const {description, ...rest} = product;
                             return rest;
            } else{
                return product;
            }
        });
           if(keyWasDeleted){
                 const deleteProductKeyString = JSON.stringify(deleteProductKey, null, 2);
        await fs.writeFile(PATH_DB, deleteProductKeyString, 'utf8');
            log('Success deleted key "description"');
            } else{
                log('The key not found in product');
            }
       
        // products.forEach((product) => {
        //     delete product.description;
        // });
        // const deleteKeyString = JSON.stringify(products, null, 2);

        // await fs.writeFile(PATH_DB, deleteKeyString, 'utf8');
    
    } catch (error) {
        log('Erorr delete key description', error);
    }
};
await modifyProducts();
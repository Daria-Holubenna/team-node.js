import readFileDB from '../utils/readFileDB.js';

const groupProductsByCategories = async () => {
    try {
        const products = await readFileDB();
        if (!products.length) {
            console.log('is empty, nothing to map');
            return [];
        }
        // const productsCategories = products.map((product)=> {
        //     const category = product.category;
        //    return  [...category, ...product.name];
        // });
        // const uniqueCategories = new Set(productsCategories);
        // const categoriesArray = [...uniqueCategories];
        // const nameProductsOfCategory = categoriesArray.map((category) => category.name);
        const productsCategories = products.reduce((acc, product) => {
            const { name, category } = product;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(name);
            return acc;
        }, {});
        console.log(productsCategories);
    } catch (error) {
        console.log('Error in map category', error);
    };
};
groupProductsByCategories();
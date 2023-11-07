function storeProvision(stock,orderedProducts){
    let products = {};

    for(let i = 0;i < stock.length;i += 2){
let productName = stock[i];
let qty = Number(stock[i + 1]);

products[productName] = qty;
    }

    for(let j = 0;j < orderedProducts.length ;j += 2){
        let productName = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);

        if(products.hasOwnProperty(productName)){
            products[productName] += qty;
        } else {
            products[productName] = qty;
        }
    }

    // console.log(products);
    let entries = (Object.entries(products))

    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}


storeProvision()[
    'Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']

    // [ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], 
    // [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]
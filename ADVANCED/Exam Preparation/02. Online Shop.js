class OnlineShop {
    constructor(warehouseSpace) {
      this.warehouseSpace = warehouseSpace;
      this.products = [];
      this.sales = [];
    }
  
    loadingStore (product, quantity, spaceRequired) {
      if (this.warehouseSpace < spaceRequired) {
        throw new Error("Not enough space in the warehouse.");
      }
  
      this.products.push({
         product,
         quantity 
        });
      this.warehouseSpace -= spaceRequired;

      return `The ${product} has been successfully delivered in the warehouse.`;
    }
  
    quantityCheck(product, minimalQuantity) {
      const productCheck = this.products.find(p => p.product == product);

  
      if (!productCheck) {
        throw new Error(`There is no ${product} in the warehouse.`);
      }
  
      if (minimalQuantity <= 0) {
        throw new Error(`The quantity cannot be zero or negative.`);
      }
      if(minimalQuantity <= productCheck.quantity ) {
        return `You have enough from product ${product}.`;
      } else{
        const difference = minimalQuantity - productCheck.quantity;
        productCheck.quantity = minimalQuantity;
        return `You added ${difference} more from the ${productCheck.product} products.`;
      }
      
     
    }
  
    sellProduct(product) {
      let sellProduct = this.products.find((p) => p.product == product);
  
      if (!sellProduct) {
        throw new Error(`There is no ${product} in the warehouse.`);
      }
        sellProduct.quantity-=1
        let quantity = product.quantity;
        this.sales.push({
            product,
            quantity
        });

      return `The ${sellProduct.product} has been successfully sold.`;
    }
   
    revision() {

        let result = [];
        if (this.sales.length === 0) {
            throw new Error("There is no sales today!");
          }else {
            result.push(`You sold ${this.sales.length} products today!`)
          }

      result.push(`Products in warehouse:`);
      this.products.map((x) =>result.push(`${x.product} - ${x.quantity} more left`))    
      
      return result.join("\n");
    }
  }

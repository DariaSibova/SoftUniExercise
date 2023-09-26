function solve(count, type, day) {
    let singularPrice = 0;

    switch (day) {
        case 'Friday':
            if (type == 'Students') {
                singularPrice = 8.45;
            } else if (type == 'Business') {
                singularPrice = 10.90;
            } else if (type == 'Regular') {
                singularPrice = 15;
            }
         break;
        case 'Satuday':
            if (type == 'Students') {
                singularPrice = 9.80;
            } else if (type == 'Business') {
                singularPrice = 15.60;
            } else if (type == 'Regular') {
                singularPrice = 20;
            }
        break;
        case 'Sunday':
            if (type == 'Students') {
                singularPrice = 10.46;
            } else if (type == 'Business') {
                singularPrice = 16;
            } else if (type == 'Regular') {
                singularPrice = 22.50;
            }
        break;
    }

    let totalPrice = count * singularPrice;

    if(type == 'Students' && count >= 30){
        totalPrice *= 0.85;
    }else if(type == 'Business' && count >= 100){
        let discountedPrice = 10 * singularPrice;
        totalPrice -=  discountedPrice;
    }else  if (type == 'Regular' && (count >= 10 && count <=20)){
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
// solve(30, "Students", "Sunday");
solve(40,"Regular","Saturday")
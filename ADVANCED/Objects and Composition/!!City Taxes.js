function cityTaxes(name,population,treasury){
    const result = {
        name,
        population,
        treasury,
        taxRate:10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowtn(parcentage){
            this.population += Math.floor(this.population * parcentage / 100);
        },
        applyRecession(percentage){
            this.treasury -= Math.ceil(this.treasury * percentage / 100);

        }
    };
    return result;
}

const city =

cityTaxes('Tortuga',
7000,
15000);
console.log(city);
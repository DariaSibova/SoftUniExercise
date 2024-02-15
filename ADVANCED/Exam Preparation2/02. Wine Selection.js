class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space ===  this.wines.length) {
            throw new Error('Not enough space in the cellar.');
        }
        let res ={
            wineName,
            wineType,
            price,
            paid:false
        }

        this.wines.push(res);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    };
    payWineBottle(wineName, price) {
        let currentWine = this.wines.find(a => a.wineName === wineName)

        if (!currentWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        };

        if (currentWine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        } 
        currentWine.paid = true;
        this.bill+=price;
        return `You bought a ${currentWine.wineName} for a ${price}$.`

    }
    openBottle(wineName) {
       let currentTarget = this.wines.find(x => x.wineName == wineName);

        if (!currentTarget) {
            throw new Error("The wine, you're looking for, is not found.");
        };

        if (!currentTarget.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } 

            this.wines.filter(x => x.wineName !== wineName);
            return `You drank a bottle of ${wineName}.`
        
    };
    cellarRevision(wineType) {
        if (wineType) {
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            let result = [];
            result.push(`You have space for ${ this.space - this.wines.length } bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            sortedWines.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.wineName} > ${b.wineType} - ${paid}.`);
            });
            
            return result.join('\n').trim();
            

        } else {
            let findWine = this.wines.find(b => b.wineType == wineType);

            if (findWine) {
                let result = [];
                let paid = findWine.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findWine.wineName} > ${findWine.wineType} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }
}



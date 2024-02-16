function solution (){
    class Balloon{
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBallon extends Balloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength){
            super(color,gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonColor;
            this.ribbon = {
                color:ribbonColor,
                length:ribbonLength
            }
        }
        get ribbon(){
            return this._ribbon
        }
        set ribbon (data){
            this._ribbon = data
        }
    }
    class BithdayBallon extends PartyBallon{
        constructor(color,gasWeight,ribbonColor,ribbonLength,text){
            super(color,gasWeight,ribbonColor,ribbonLength);
            this.text = text;
        }
        get text(){
            return this._text;

        }
        set text(text){
            this._text = text;
        }
    }
    return{
        Balloon,
        PartyBallon,
        BithdayBallon
    }
}
(function(){
    String.prototype.ensureStart = function(str){
        return this.startsWith(str)? this.toString() : str + this
    };
    String.prototype.ensureEnd = function(str){
        return this.endsWith(str)? this.toString() : this + str
    };
    String.prototype.isEmpty = function(){
        return !this.toString()
    };
    String.prototype.truncate = function(n){
       if(n < 4){
        return ".".repeat(n);
       }
       if(this.length < n ){
        return this.toSpring();
       }
       if(this.includes(" ")){
        let words = this.split(" ");
        let res = [];
        for(let word of words){
            if(res.join(" ").length + word.length + 3 <= n){
                res.push(word)
            }else {
                break;
            }
        }
        return res.join(" ")+ "...";
       }
       return this.slice(0,n - 3)+ "...";
    };
})
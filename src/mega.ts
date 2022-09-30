let numSorteio: Array<number> = [];

let mega =():Array<number> => {
    for(let i=0; i<6; i++){
        
        let numeSor: number = Math.floor(Math.random() * 60 + 1);

      
        if(numSorteio.indexOf(numeSor) == -1) {
            numSorteio.push(numeSor);
        }else{
            i--;
        }

        
    };
    return numSorteio;
};

console.log(mega);
//numSorteio.forEach((x)=>{console.log(x)}); 
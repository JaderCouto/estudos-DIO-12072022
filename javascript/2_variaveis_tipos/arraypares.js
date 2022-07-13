function substituiPares(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === 0){
            console.log ("Voce ja e 0");
        } else if (array[i] % 2 === 0){
            console.log ("substituindo ${array[i]} por 0");
            array[i] =0;
        } 
    }
    return array;
}

let arr = [1,3,5,6,4,7,8,9,2,9,0,0,4,60];
console.log (substituiPares(arr));
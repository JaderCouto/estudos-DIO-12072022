//map
const maca = {value: 2,}
const laranja = {value: 3,}

    function mapComThis(arr, thisArg) {
        return arr.map(function(item)){
            return item*this.value;
        }
    }

    const nums= [1,2];

    console.log('this -> maca', mapComThis(nums, maca));
    console.log('this -> laranja', mapComThis(nums, laranja));


// map

function mapSemThis(arr){
    return arr.map(function(item)){
        return item *2;
    }
}

const nums = [2, 4, 6, 8, 10];

console.log(nums);

// filter

function filtraPares(arr){
    return arr.filter();
}

function callback {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));


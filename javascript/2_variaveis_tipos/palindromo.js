// solucao 1

function verificaPalindromo(string) {
    if (!string) return;

    string.split("").reverse().join("") === string;
}


// SOLUCAO 2

function verificaPalindromo2(string) {
    if (!string) return;

    for (let i = 0; i < string.length / 2; i++){
        if (string[i]!==string[string.length-1-i]) {return false;}
    } return true;
}

console.log(verificarPalindromo2) = ("gat");
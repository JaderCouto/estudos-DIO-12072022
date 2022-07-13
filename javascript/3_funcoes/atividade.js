const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '1B',
    }
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    }
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    }
]



function alunosAprovados (arr, media){
    let aprovados =[];

    for (let i; i <arr.length; i++){

const {nota, nome} = arr[i];
        if ( nota >= media){
        //if (arr[i].nota>= media){
            //aprovados.push(arr[i]).nome);
            aprovados.push(nome);
        }

    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5))

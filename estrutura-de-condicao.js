// IF
const idadeDoUsuario = 35;

if (idadeDoUsuario >= 18) {
    console.log('Usuario maior ou igual que 18 anos')
} else {
    console.log('Usuario menor que 18 anos')
}

// IF, ELSE IF, ELSE
const velocidade = 35;

if (velocidade >= 100) {
    console.error('Multa gravissima');
} else if (velocidade >= 80 && velocidade < 100) {
    console.warn('Multa grave');
} else if (velocidade >= 60 && velocidade < 80) {
    console.log('Multa leve');
} else {
    console.info('Sem multa');
}

// Switch
const mes = 15;

switch (mes) { 
    case 1: 
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default: 
        console.error('Mes nao existe')
        break;
}
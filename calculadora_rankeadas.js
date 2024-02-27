let vitorias = 67
let derrotas = 23
let saldo = saldoRankeadas(vitorias, derrotas)
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

saldoRankeadas()

function saldoRankeadas(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

while(saldo <= 10) {
    console.log(`O saldo de Herói é ${saldo} pontos e ele está no nível ${nivel[0]}`)
    break;
}

while(saldo > 10 && saldo <= 20){
    console.log(`O saldo de Herói é ${saldo} ponto se ele está no nível ${nivel[1]}`)
    break;
}

while(saldo > 20 && saldo <= 50) {
    console.log(`O saldo de Herói é ${saldo} pontos e ele está no nível ${nivel[2]}`)
    break;
}

while(saldo > 50 && saldo <= 80){
    console.log(`O saldo de Herói é ${saldo} pontos e ele está no nível ${nivel[3]}`)
    break;
}

while(saldo > 80 && saldo <= 90){
    console.log(`O saldo de Herói é ${saldo} pontos e ele está no nível ${nivel[4]}`)
    break;
}

while(saldo > 90 && saldo <= 100){
    console.log(`O saldo de Herói é ${saldo} pontos e ele está no nível ${nivel[5]}`)
    break;
}

while(saldo >= 101){
    console.log(`O saldo de Herói é ${saldo} pontos e ele está no nível ${nivel[6]}`)
    break;
}
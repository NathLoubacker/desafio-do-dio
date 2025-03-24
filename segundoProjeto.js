let vitoria = 70;
let derrota = 30;
let nivel = Boolean;

result(vitoria, derrota);

function result (saldo) {
    return saldo;
}

let saldo = result(vitoria - derrota);
 

if (vitoria < 10) {
    nivel = "Ferro";
} else if (vitoria >= 11 && vitoria <= 20) {
    nivel = "Bronze";
} else if (vitoria >= 21 && vitoria <= 50) {
    nivel = "Prata";
} else if (vitoria >= 51 && vitoria <= 80) {
    nivel = "Ouro";
} else if (vitoria >= 81 && vitoria <= 90) {
    nivel = "Diamante";
} else if (vitoria >= 91 && vitoria <= 100) {
    nivel = "Lendário";
} else if (vitoria >= 101) {
    nivel = "Imortal";
}

while (true) {
    console.log("O heroi tem saldo de " + result(saldo) + " e está no nível " +  nivel);
    break; 
}
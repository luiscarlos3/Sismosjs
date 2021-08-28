let onda = 600;
let tiempo = 70;

function calcular(amplitud, diferencia) {
    var magnitud = 0;
    var num1 = Math.log10(amplitud);
    var num2 = 8 * diferencia;
    var num3 = 3 * Math.log10(num2);
    magnitud = num1 + (num3 - 2.92);
    return magnitud;
}

function escala(sismo) {
    var fuerza = Math.floor(sismo);
    console.log("Escala de ritcher Magnitud : " + fuerza);
    if (fuerza <= 3.5) {
        console.log("Microsismo detectado por instrumentos");
    } else if (fuerza >= 3.5 && fuerza <= 5.4) {
        console.log("Sentido por algunas personas (generalmente en reposo)");
    } else if (fuerza >= 5.5 && fuerza <= 6.0) {
        console.log("Sentido por algunas personas dentro de edificios");
    } else if (fuerza >= 6.1 && fuerza <= 7.0) {
        console.log("Sentido por algunas personas fuera del edificios");
    } else if (fuerza >= 7.0 && fuerza <= 7.9) {
        console.log("sentido por casi todos");
    } else if (fuerza >= 8) {
        console.log("Destructivo");
    }
}
console.log(calcular(onda, tiempo));
escala(calcular(onda, tiempo));
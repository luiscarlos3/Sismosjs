class Sismo {
    constructor(amplitud, diferencia) {
        this._amplitud = amplitud;
        this._diferencia = diferencia;
    }

    fuerza() {
        let magnitud = 0;
        let num1 = Math.log10(this._amplitud);
        let num2 = 8 * this._diferencia;
        let num3 = 3 * Math.log10(num2);
        magnitud = num1 + (num3 - 2.92);
        return magnitud;
    }
    escala() {
        let fuerza = this.fuerza();
        let change = document.getElementById("colors")
        let msg = document.getElementById("msg");
        let valor = document.getElementById("escala");
        if (fuerza <= 3.5) {
            msg.innerHTML = "Microsismo detectado por instrumentos";
            change.style.background = "#27AE60";
            valor.innerHTML = fuerza;
        } else
        if (fuerza >= 3.5 && fuerza <= 5.4) {
            msg.innerHTML = "Sentido por algunas personas (generalmente en reposo)";
            change.style.backgroundColor = "#1E8449";
            valor.innerHTML = fuerza;
        } else
        if (fuerza >= 5.5 && fuerza <= 6.0) {
            msg.innerHTML = "Sentido por algunas personas dentro de edificios";
            change.style.backgroundColor = "#F1C40F";
            valor.innerHTML = fuerza;
        } else if (fuerza >= 6.1 && fuerza <= 7.0) {
            msg.innerHTML = "Sentido por algunas personas fuera del edificios";
            change.style.backgroundColor = "#D68910";
            valor.innerHTML = fuerza;
        } else
        if (fuerza >= 7.0 && fuerza <= 7.9) {
            msg.innerHTML = "sentido por casi todos daños serios edificios";
            change.style.backgroundColor = "#B03A2E";
            valor.innerHTML = fuerza;
        } else if (fuerza >= 8) {
            change.style.backgroundColor = "red";
            msg.innerHTML = "destructivo daños muy grandes edificios";
            valor.innerHTML = fuerza;
        }
    }
}
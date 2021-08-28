const Calcular = () => {
    let form = document.forms['form'];
    const obj = new Sismo(form.amplitud.value, form.diferencia.value);
    if (obj.fuerza() == "-Infinity") {
        document.getElementById("escala").innerHTML = "Ingrese los valores";
        document.getElementById("msg").innerHTML = "no hay valores";
        document.getElementById("colors").style.background = "white";

    } else {
        obj.escala();
    }
    form.reset();
}
let horaElegida = "";

function verificar(){

    let nombre = document.getElementById("nombre").value;

    if(nombre.toLowerCase() === "nombre de tu novia".toLowerCase()){
        document.getElementById("pantalla1").classList.add("oculto");
        document.getElementById("pantalla2").classList.remove("oculto");
    }else{
        alert("Ese mensaje no es para ti ❤️");
    }
}

function hora(h){
    horaElegida = h;

    document.getElementById("pantalla2").classList.add("oculto");
    document.getElementById("pantalla3").classList.remove("oculto");
}

function girar(){

    const actividades = [
        "🍿 Cine",
        "🍔 Cena",
        "🎨 Pintar juntos",
        "🍦 Helado",
        "🌃 Paseo nocturno"
    ];

    let random =
    actividades[Math.floor(Math.random()*actividades.length)];

    document.getElementById("actividad").innerText = random;

    setTimeout(()=>{
        document.getElementById("pantalla3").classList.add("oculto");
        document.getElementById("pantalla4").classList.remove("oculto");
        document.getElementById("horaFinal").innerText = horaElegida;
    },3000);
}

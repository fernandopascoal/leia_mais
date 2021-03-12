function leiaMais() {
    var pontos = document.getElementById ("pontos");
    var maisTexto = document.getElementById ("mais");
    var btn = document.getElementById ("btn");


    if(pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btn.innerHTML = "Leia Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btn.innerHTML = "Leia Menos";
    }
}
const criptografia = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
}

const capturaInput = () => {
    const texto = document.getElementById("textInput").value;
    const palavras = texto.split(" ");
    
    const palavrasCriptografadas = palavras.map( (palavra) => {
        const letras = palavra.split("");
        const letrasCriptografadas = letras.map( letra => criptografar(letra) );
        const palavraCriptografada = letrasCriptografadas.join("")
        return palavraCriptografada
    } );
    const textoCriptografado = palavrasCriptografadas.join(" ");
    atualizaTags(textoCriptografado);
}

const atualizaTags = (texto) => {
    const imageDiv = document.getElementById("image__div");
    imageDiv.style.display = "none";
    
    const h2Tag = document.getElementById("message__title");
    h2Tag.style.display = "none";

    const input = document.getElementById("final__message");
    input.style.fontSize = "xx-large";
    input.innerText = "";
    input.innerText = texto;
}

const criptografar = (letra) => {
    switch (letra) {
        case "a":
            return criptografia.a
        case "e":
            return criptografia.e
        case "i":
            return criptografia.i
        case "o":
            return criptografia.o
        case "u":
            return criptografia.u
        default:
            return letra
    }
}

const copiaTexto = () => {
    const pTag = document.getElementById("final__message");
    pTag.select();
    document.execCommand("copy");
}

const descriptografar = (palavra) => {
    const palavraDescriptofragada = palavra.replaceAll( "ai", "a" ).replaceAll( "enter", "e")
    .replaceAll( "imes", "i" ).replaceAll( "ober", "o" ).replaceAll( "ufat", "u" );
    return palavraDescriptofragada;
}

const capturaInputParaDescriptografar = () => {
    const texto = document.getElementById("textInput").value;
    const palavras = texto.split(" ");

    const palavrasDescriptografadas = palavras.map( (palavra) => {
        const palavraDescriptofragada = descriptografar(palavra);
        return palavraDescriptofragada
    } );

    const textoDescriptografado = palavrasDescriptografadas.join(" ");
    atualizaTags(textoDescriptografado);
}
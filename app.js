function procesar(opcion) {
    let texto = document.getElementById('texto').value.trim();
    let resultado = '';

    if (opcion === 'encriptar') {
        resultado = encriptar(texto);
    } else {
        resultado = desencriptar(texto);
    }

    mostrarResultado(resultado);
}

function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptar(textoEncriptado) {
    let texto = textoEncriptado.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
    return texto;
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerHTML = `<p>${resultado}</p>`;
}

function copiarTexto() {
    let resultado = document.getElementById('resultado').innerText;

    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al intentar copiar: ', err);
            alert('Error al intentar copiar el texto');
        });
}
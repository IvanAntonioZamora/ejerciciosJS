var nombre = 'Ivan Antonio Zamora';

var realizado = document.getElementById('autor');
realizado.innerHTML = nombre;

var lateral = document.getElementById('lateral');
lateral.innerHTML = `
    <h2>Columna Lateral</h2>
    <h3>Columna</h3>
    <p>alksjlkjdaijwiledjljiwodlsaijwod</p>
    <p>d4r34r34r34r43r34r43r34r43r34r44</p>
    ${nombre}
`

function saludo(nombre) {
    return `¡Hola ${nombre}, Bienvenido!`
}

console.log(saludo('Ivan'));

function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;

    return `Tienes ${edad} años`;
}

console.log(calcularEdad(1991));

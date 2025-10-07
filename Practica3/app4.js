function simularPeticionAPI()
{
    return new Promise(resolve =>
    {
setTimeout(() => 
    {
    resolve("Datos recibidos correctamente");
}, 2000);
    });
}

async function obtenerDatos() {
    const resultado= await simularPeticionAPI();
    console.log(resultado);
}
obtenerDatos();
// Ejemplo de destructuración solicitado
const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const { nombre, edad, direccion: { ciudad } } = persona;
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
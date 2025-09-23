const personas =[
    { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];
const personaLuis= personas.find(persona=>persona.nombre=="Luis");
console.log(personaLuis)

personas.forEach(persona => {
    console.log("nombre " + persona.nombre + " Edad " + persona.edad)
});

const totaledades= personas.reduce((acum, persona)=> acum + persona.edad, 0)
console.log(totaledades)
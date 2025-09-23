const personas = [
    {nombre2 : "Ana", edad: 22},
    {nombre2 : "Luis", edad: 35},
    {nombre2 : "Maria", edad: 28}
];

const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(totalEdad);

const existeLuis = personas.find(persona => persona.nombre2 === "Luis");
console.log(existeLuis);

personas.forEach(persona => 
    console.log("Nombre: " + persona.nombre2 + " edad: " + persona.edad)
);
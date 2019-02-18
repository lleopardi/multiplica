/*
11.- Dado el sgte array de personas, crear una función que reciba dicho array y las edades (1 o N
parámetros) por las cuales se desea excluir a las personas, retornando solo el nombre de dichas
personas.
Por ejemplo, podría ser: functionName(arr, 11) o functionName(arr, 11, 12, 13, ...)
const people = [
    {
        name: 'Pepe', edad: 11
    },
    {
        name: 'Juan', edad: 22
    },
    {
        name: 'Lalo', edad: 33
    }
]
*/

const filterPeople = (people, ...ages) => people
    .filter((person) => ages.includes(person.edad))
    .map((person) => person.name);

export { filterPeople }


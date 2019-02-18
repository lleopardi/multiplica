/* Dado el sgte array, retornar solo los NOMBRES de las personas que donan órganos y que
tienen 1 o más esposas, cuyo nombre empieze con 'Y' o 'N'.
people = [
    {
        name: 'Pepe',
        donacion: true,
        esposas: ['Rosangela', 'Mayte']
    },
    {
        name: 'Juan',
        donacion: false,
        esposas: ['Yahaira']
    },
    {
        name: 'Lalo',
        donacion: true,
        esposas: []
    },
    {
        name: 'Carlos',
        donacion: true,
        esposas: ['Yahaira', 'Nursia']
    }
]
*/

const filterPeople = (peopleArray) => {
    return  peopleArray
        .filter((person) => person.donacion)
        .filter((person) => person.esposas.length > 0)
        .filter((person)=> {
            return person.esposas.every( (esposa) => esposa.startsWith('Y') || esposa.startsWith('N') )
        } )
        .map( (person) => person.name);
}

export { filterPeople };
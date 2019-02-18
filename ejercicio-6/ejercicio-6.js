
const changeName = (index) => {
    const newName = 'choy';
    const person = Object.assign({}, arrPersonas[index]);
    if (person.hasOwnProperty('name')) {
        person.name = newName;       
    }
    
    return person;
}

var arrPersonas = [
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
    }
];

export { changeName }
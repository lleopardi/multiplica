import { filterPeople } from './ejercicio-11'

const people = [
    {
        name: 'Pepe',
        edad: 11
    },
    {
        name: 'Juan',
        edad: 22
    },
    {
        name: 'Lalo',
        edad: 33
    }
];

test('Cuando contiene una coincidencia, retorna un array con un elemento', () => {
    expect(filterPeople(people, 11)).toEqual(['Pepe']);
});

test('Cuando no contiene coincidencias, retorna un array vacio', () => {
    const result = filterPeople(people, 50);
    expect(result).toEqual([]);
    expect(result.length).toBe(0);
});

test('Cuando se envian varios parametros y contiene 2 coincidencias', () => {
    const result = filterPeople(people, 50, 11, 22);
    expect(result).toEqual(['Pepe', 'Juan']);
    expect(result.length).toBe(2);
});
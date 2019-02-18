import { filterPeople } from './ejercicio-10';


test('Cuando una sola persona cumple con los criterios, returna un array con un nombre', () => {
    const people = [
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
    ];

    expect(filterPeople(people)).toEqual(['Carlos']);

});

test('Cuando ninguna persona cumple con los criterios, retorna un array vacio', () => {
    const people = [
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

    expect(filterPeople(people)).toEqual([]);

});
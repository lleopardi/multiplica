import { changeName } from './ejercicio-6'

test('cuando se ingresa una posicion inválida, retorna un objetoo vacio', () => {
    expect(changeName(5)).toEqual({});
});

test('cuando se ingresa una posición válida, camia el nombre del objeto', () => {
    const person = {
        name: 'choy',
        donacion: true,
        esposas: []
    }
    expect(changeName(2)).toEqual(person);
});
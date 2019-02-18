import { orderDrink } from './ejercicio-13';

it('cuando selecciona códigos válidos', () => {
    expect(orderDrink('code1')).toBe('Estoy tomando limonada');
    expect(orderDrink('code3')).toBe('Estoy tomando cerveza');
});

it('cuando selecciona códigos no válidos', () => {
    expect(orderDrink('code18')).toBe('Estoy tomando agua de jamaica');
    expect(orderDrink('code100')).toBe('Estoy tomando agua de jamaica');
});
import { twoParams } from './ejemplo-1';

test('Cuando se envian ambos parámetros, debe retornar los parametros concatenados', () => {
    expect(twoParams(0, 0)).toBe('0 - 0');
    expect(twoParams(false, false)).toBe('false - false');
    expect(twoParams(false, false)).toBe('false - false');
    expect(twoParams(true, false)).toBe('true - false');
    expect(twoParams(null, null)).toBe('null - null');
    expect(twoParams('', '')).toBe(' - ');
});

test('Cuando faltan ambos parámetros debe arrojar el error "param1 es requerido" ', () => {
    expect(() => twoParams()).toThrowError('param1 es requerido');
    expect(() => twoParams(undefined, undefined)).toThrowError('param1 es requerido');
});


test('Cuando falta el segundo parámetro debe arrojar el error "param2 es requerido" ', () => {
    expect(() => twoParams(false)).toThrowError('param2 es requerido');
    expect(() => twoParams('parametro 1')).toThrowError('param2 es requerido');
    expect(() => twoParams(true)).toThrowError('param2 es requerido');
    expect(() => twoParams(0)).toThrowError('param2 es requerido');
    expect(() => twoParams(0, undefined)).toThrowError('param2 es requerido');
});

test('Cuando falta el primer paramétro debe arrojar el error "param1 es requerido" ', () => {
    expect(() => twoParams( undefined, 'parámetro 2')).toThrowError('param1 es requerido');
    expect(() => twoParams( undefined, null)).toThrowError('param1 es requerido');
});

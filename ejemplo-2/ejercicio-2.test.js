import { returnPromise } from './ejercicio-2';

it('cuando la promesa no se demora, debe retornar "La prome resolvió"', () => {
    expect.assertions(1);
    return expect(returnPromise(1000)).resolves.toEqual('La prome resolvió');
});

it('cuando la promesa se demora, debe retornar "La prome se demoró"', () => {
    expect.assertions(1);
    return expect(returnPromise(4000)).rejects.toEqual('La prome se demoró');
});

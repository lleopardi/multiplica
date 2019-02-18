import { callSpeak } from './ejercicio-8';

test('Cuando se llama a callSpeak usando a dog en el metodo call debe imprimir wof ' , () => {
    let out = '';
    let storeLog = inputs => (out += inputs);
    console["log"] = jest.fn(storeLog);
    callSpeak();
    expect(out).toBe("wof");
});




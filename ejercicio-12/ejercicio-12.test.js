import { getInformacion } from './ejercicio-12';
it('debe resolver la promesa con el dni del conductor', () => {
    expect.assertions(1);
    return expect(getInformacion('12345678')).resolves.toEqual({
        name: 'Jhon Doe',
        dni: '12345678',
        sexo: 'masculino'
    });
});

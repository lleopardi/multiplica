/*
13.- Crear una función la cual reciba como parámetro el código de una bebida, y según las siguientes
condicionales nos imprima en consola el siguiente mensaje:
‘Estoy tomando NOMBRE_DE_BEBIDA’
El nombre de la bebida por defecto para los códigos que no existan es: ‘agua de jamaica’.

*/

const drinks = {
    code1: 'limonada',
    code2: 'fanta',
    code3: 'cerveza',
    code4: 'kerosene',
    code5: 'gasolina',
    code6: 'chicharra',
    code7: 'pisco',
    code8: 'punto g',
    code9: 'ron',
    code10: 'leche',
    code11: 'quaker',
    code12: 'guarana'
}

const getDrink = (code, drinkList) => {
    const defautDrink = 'agua de jamaica';
    return drinkList[code] || defautDrink;
};

const formatMessage = (nameDrink) => `Estoy tomando ${nameDrink}`

const orderDrink = (codeDrink) => {
    const drink = getDrink(codeDrink, drinks);
    const message = formatMessage(drink);
    console.log(message);
    return message;
}

export { orderDrink };

orderDrink('code1');
orderDrink('code11');
orderDrink('code4');
orderDrink('code155');
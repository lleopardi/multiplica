const returnPromise = (timeResponse) => {
    const timeExpired = 3000;
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const message = 'La prome se demoró';
            console.log(message);
            reject(message)
        }, timeExpired);

        setTimeout(() => {
            const message = 'La prome resolvió';
            console.log(message);
            resolve(message);
        }, timeResponse);
    });
}


export { returnPromise }




/*const realWork = (timeResponse) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('La prome retornó'), timeResponse);
    });
}

const reponseTimeout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('La prome se demoró'), 3000);
    });
}

const returnPromise = async (timeResponse) => await Promise.race([realWork(timeResponse), reponseTimeout()]);



*/

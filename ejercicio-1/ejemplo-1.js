const isRequired = (param) => {
    throw new Error(`${param} es requerido`)
}

const twoParams = (param1 = isRequired('param1'), param2 = isRequired('param2')) => `${param1} - ${param2}`;


export { twoParams };

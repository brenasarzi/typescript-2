export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`busacndo elemento do DOM com o seletor 
                ${seletor} para injetar ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}

"use strict";
;
(() => {
    // Si la funcion no tiene un return implicito, es undefinend
    function callBatman() { }
    const callSuperman = () => { };
    const a = callBatman();
    const b = callSuperman();
    console.log({ a, b });
})();

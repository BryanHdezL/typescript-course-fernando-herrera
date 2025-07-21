"use strict";
;
(() => {
    // Las funciones de tipo never no deben de terminar exitosamente
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Auxilio!');
})();

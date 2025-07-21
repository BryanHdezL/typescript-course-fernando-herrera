"use strict";
;
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log({ batman, linternaVerde, volcanNegro });
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe esa posición'); // ? → Funciona para ejecutar una acción solo si existe
})();

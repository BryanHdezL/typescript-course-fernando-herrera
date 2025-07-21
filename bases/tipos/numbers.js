"use strict";
;
(() => {
    let avengers = 10;
    let villians = 20;
    console.log({ avengers });
    if (avengers < villians)
        console.log('Estamos en problemas');
    else
        console.log('Nos salvamos');
    avengers = Number('10A');
    console.log({ avengers }); // NaN -> Se considera un numero en JS
})();

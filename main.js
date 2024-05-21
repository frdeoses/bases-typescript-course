"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. jackson',
        ironman: 'Robert jr ',
        vision: 'Paul',
        activos: true,
        poder: 1555,
    };
    console.log(avengers);
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman);
        console.log(resto);
    };
    printAvenger(avengers);
    const avengersArr = ['Capitan America', 'Ironman', 'Hulk'];
    const [capi, ironmann] = avengersArr;
    console.log({ ironmann, capi });
})();
(() => {
    console.log('let');
})();
//# sourceMappingURL=main.js.map
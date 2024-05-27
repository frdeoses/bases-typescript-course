"use strict";
(() => {
    class Mutante {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realname);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, avgAge) {
            this.name = name;
            this.team = team;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return ` ${this.name} (${this.team}) `;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Antman', 'Capitan', 50);
})();
(() => {
    class Avenger {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
        getFullName() {
            return `${this.name} ${this.realname} `;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realname, isMutan) {
            super(name, realname);
            this.isMutan = isMutan;
        }
        get fullName() {
            return `${this.name} - ${this.realname} `;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverie = new Xmen('Wolvewrine', 'Logan', true);
    wolverie.fullName = 'Fran';
})();
(() => {
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el unico apocalipsis...');
            }
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Fran');
})();
//# sourceMappingURL=main.js.map
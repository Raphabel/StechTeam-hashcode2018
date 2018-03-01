var Algo	= require('./algo.js');
var Read     = require('./read');
var Write     = require('./write');

const filename = process.argv[2];

var problem = Read.processFile(filename);

var cars = Algo.init(problem);
/**var cars = {
    0: {
        rides: [42, 10],
        last: {x: 2, y: 2, time: 142},
    },
    1: {
        rides: [2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10],
        last: {x: 2, y: 2, time: 142},
    },
    2: {
        rides: [2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10],
        last: {x: 2, y: 2, time: 142},
    },
    3: {
        rides: [2, 0, 42, 10, 42, ],
        last: {x: 2, y: 2, time: 142},
    },
    4: {
        rides: [2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10],
        last: {x: 2, y: 2, time: 142},
    },
    5: {
        rides: [2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10],
        last: {x: 2, y: 2, time: 142},
    },
    6: {
        rides: [2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10],
        last: {x: 2, y: 2, time: 142},
    },
    7: {
        rides: [2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10, 2, 0, 42, 10, 42, 10],
        last: {x: 2, y: 2, time: 142},
    }
}
*/
Write.displaySolution(filename, cars);

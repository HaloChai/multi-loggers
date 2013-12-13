
var ml = require('../multi-loggers');

var logger = new ml.init({
    transports : [
        new ml.logger.setting({ method : 'info', file : 'info.log' }),
        new ml.logger.setting({ method : 'err', file : 'err.log' }),
    ],
    exceptionCatch : { show : false, file : 'exception.log' }
});

// Coustom method
logger.info('test info.');
logger.err('test err.');

// Catch exception
setTimeout(function() {
    console.log(test.name);
}, 2000);
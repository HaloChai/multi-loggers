
var ml = {};

ml.logger = require('./lib/logger.js');
ml.exception = require('./lib/exception.js');

ml.init = function( options ) {
    var body = {};
    options.transports.forEach(function( log ){
        body[log.method] = log[log.method];
    });
    
    if( options.exceptionCatch ) {
        new ml.exception.listener({ 
            show : ((options.exceptionCatch.show) === 'undefined') ? false : options.exceptionCatch.show, 
            file : options.exceptionCatch.file 
        });
    }
    
    return body;
};

module.exports = ml;

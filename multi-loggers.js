
var ml = {};

ml.logger = require('./lib/logger.js');
ml.exception = require('./lib/exception.js');

ml.init = function( options ) {
    var body = {};
    
    if( Object.prototype.toString.call( options.transports ) === '[object Array]' ) {
        options.transports.forEach(function( log ){
            body[log.method] = log[log.method];
        });
    }
    
    if( options.exceptionCatch ) {
        new ml.exception.listener({ 
            show : ((options.exceptionCatch.show) === 'undefined') ? false : options.exceptionCatch.show, 
            file : options.exceptionCatch.file 
        });
    }
    
    body.add = function( logger ) {
        var method = logger.method,
            file = logger.file;
        if( body[method] ) {
            return 'Logger_Has_Been_Created';
        }
        var transport = new ml.logger.setting({ method : method, file : file });
        body[method] = transport[method];
    };
    
    body.remove = function( method ) { delete body[method]; };
    
    return body;
};

module.exports = ml;

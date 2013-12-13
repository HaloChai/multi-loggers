

var fs = require('fs');

var exception = {};

exception.listener = function( options ) {
    
    var filepath = options.file,
        show = options.show;
    
    var file = fs.createWriteStream(filepath, { 
        flags : 'a+',
        encoding : 'utf-8',
        mode : 0777 
    });
    
    process.on('uncaughtException', function ( err ) {
        
        var message = err.stack.split('\n');
        
        if( show )
            message.forEach(function(line) {
                console.log( line );
            });
        
        var content = 
        {
            error : message,
            timestamp : new Date()
        }
        file.write( JSON.stringify(content) + '\n' );
        file.end();
    });

};

module.exports = exception;

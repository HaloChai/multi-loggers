# multi-loggers

multi-loggers is a simple module, you can decide how to use by yourself.

## Install

    npm install multi-loggers


## Example

### Default your loggers.

```javascript
var ml = require('multi-loggers');

var logger = new ml.init({
    transports : [
        new ml.logger.setting({ method : 'info', file : 'info.log' }),
        new ml.logger.setting({ method : 'err', file : 'err.log' }),
    ]
});
```

then use

```javascript
// Coustom method
logger.info('test info.');  // Save "test info" to 'info.log' file.
logger.err('test err.');    // Save "test err" to 'err.log' file.
```

### Exception logger.

```javascript
var ml = require('../multi-loggers');

var logger = new ml.init({
    // if exception occurs, it can auto save to 'exception.log' file.
    exceptionCatch : { show : false, file : 'exception.log' }
});
```

enjoy!
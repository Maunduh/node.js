const EventEmitter = require('events');


var url= 'http://mylogger.io/log';

class Logger extends EventEmitter {
     log(message){
        //send an http request
        console.log(message);
    //raise an event
        this.emit('messageLogged', {id:1, url: 'http//'});
    }
}


//exporting a single functio?
// module.exports.endPoint = url;


//exporting a single function
module.exports = Logger;
var url= 'http://mylogger.io/log';

function log(message){
    //send an http request
    console.log(message);
}
//exporting a single functio?
// module.exports.endPoint = url;

//exporting a single function
module.exports = log
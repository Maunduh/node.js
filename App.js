// //global objects in javascript and node
// console.log() 

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// //the above global objects can be called through window in javascript engine.
// // for example window.console.log

// var message = ""; // also availabe in window
// //we can call it window.message.

// //in node.js window object is unavailable.
// //instead we have global 
// // the following functions can be accessed through global
// console.log() 

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// //variables in node.js are not available in the the global scope


// var sayHello = function (){

// }

// //the above variable can be accessed through:
// window.sayHello
// //when defined afresh in another file the new defination overrides the old one.
// //To avoid overriding node.js employs the use of small components called modules.
// //Every file in a node application can be considered a module.
// //The variables defined within a module are only availabe in that module and not in global space.
// //To use an object within a module it needs to be exported explicitly.
// //App.js is my main module and its not global.

// console.log(module)

//Creating and loading a module

//importing logger

// const log = require('./logger')

// console.log('message')

//handlinhg path module
// const path = require("path")
// var pathObject = path.parse(__filename);
// console.log(pathObject)

//handling os module

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log("Total memory:"+totalMemory);

console.log(`Total memory ${totalMemory}`);
console.log(`Free memory ${freeMemory}`);























































































 
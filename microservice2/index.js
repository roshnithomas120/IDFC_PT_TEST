const mb = require('mountebank');

console.log("hello")
var m=mb.create({
    host:"mountebank",
    port: 5001,
    pidfile: '../mb.pid',
    logfile: '../mb.log',
    //protofile: '../protofile.json',
    ipWhitelist: ['*']
});
console.log(m)
m.then(function(res) {
    console.log("result",res) 
})
// The promise constructor takes one arguement, a callback with two parameters, resolve and reject.
var promise = new Promise(function(resolve, reject){
    // do a thing, possible async, then..

    if(/* everything turned out fine */) {
        resolve("Stuff worked!");
    }else{
        reject(Error("It broke"));
    }
});
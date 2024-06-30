function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    function namedfuction(){
        console.log("named function");
    }
    return namedfuction
}
function returnsAnAnonymousFunction (){
     return function (){
        console.log("this the anonymous function");
        
    }
}
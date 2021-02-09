function fibo (n){
    var x = 0;
    var y = 1;
    var z;
    var out = [];
    out.splice(0,0,x,y);
    for(i = 0; i < n - 1; i++){
        z = x + y;
        out.push(z);
        x = y;
        y = z;

    }
    return out;
}

// ----------------------------------------

var fn = fibo(10);
console.log(fn);
require.config({
    baseUrl: "./js",
    paths: {
        square: "helper/square",
        cube: "helper/square/cube",
        helper: "helper"
    },
    waitSeconds: 15
  });

define(['helper/add', 'helper/sub', 'helper/mul','helper/div'], function(add, sub, mul, div){
    return {
        getresult: function(option, opa, opb){
            switch(option){
                case "add": return add.add(opa, opb);
                case "sub": return sub.sub(opa, opb);
                case "mul": return mul.mul(opa, opb);
                case "div": return div.div(opa, opb);
            }
        }
    }

})



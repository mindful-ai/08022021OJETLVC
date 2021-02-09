Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var n1 = 5;
undefined
> var n2 = new Number(5)
undefined
> n1
5
> n2
[Number: 5]
> n1 == n2
true
> n1 === n2
false
> n1 === 5
true
> n2 === new Number(5)
false
> n3 = new Number(5)
[Number: 5]
> n2 === n3
false
> n2
[Number: 5]
> n3
[Number: 5]
> // --------------------------------------------------------
undefined
>
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var z = x + y
undefined
> z
30
> z + 10
40
> z + '10'
'3010'
> x = 1.234
1.234
> x.toString()
'1.234'
> y = '12.345'
'12.345'
> parseInt(y)
12
> parseFloat(y)
12.345
> x.toExponential(2)
'1.23e+0'
> x
1.234
> x = 100
100
> var fx = x * 1.8 + 32
undefined
> fx
212
> .exit
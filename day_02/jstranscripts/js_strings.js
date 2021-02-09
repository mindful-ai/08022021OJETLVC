C:\Users\Purushotham\Desktop\ojet_oct2020\day_02\nodedemo>node
Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var x = 5;
undefined
> var y = "apples"
undefined
> var z = {};
undefined
> typeof(x)
'number'
> typeof(y)
'string'
> typeof(z)
'object'
> typeof(y) == 'string'
true
> typeof(y) == 'object'
false
> x + y
'5apples'
> // ----------------------------------- Strings
undefined
>
>
> var s = 'ram'
undefined
> s
'ram'
> s[0]
'r'
> s[1]
'a'
> s[2]
'm'
> s[0] = 'j'
'j'
> s
> // strings are immutable in nature
undefined
> s = 'jam'
'jam'
> s
'jam'
>
>
> var m = "mary had a little lamb"
undefined
> m.length
22
> m.indexOf('little')
11
> m.lastIndexOf('little')
11
> var m = "mary had a little little little lamb"
undefined
> m.lastIndexOf('little')
25
> m.indexOf('little')
11
> m.search('little')
11
> m.indexOf('good')
-1
> m.search('good')
-1
> var m = "mary had a little Little LITTLE lamb"
undefined
> m.search(/.ittle/gi)
11
> m.search(/.*L./gi)
0
> m
'mary had a little Little LITTLE lamb'
> m.substring(11, 16)
'littl'
> m.substr(11, 10)
'little Lit'
> m.replace('lamb', 'kitten')
'mary had a little Little LITTLE kitten'
> m
'mary had a little Little LITTLE lamb'
> var mm = m.replace('lamb', 'kitten')
undefined
> m
'mary had a little Little LITTLE lamb'
> mm
'mary had a little Little LITTLE kitten'
> m.toUpperCase()
'MARY HAD A LITTLE LITTLE LITTLE LAMB'
> m.toLowerCase()
'mary had a little little little lamb'
> // toUpperCase
undefined
>
> var x = "    Hello  "
undefined
> x.trim()
'Hello'
> m
'mary had a little Little LITTLE lamb'
> m.split(' ')
[
  'mary',   'had',
  'a',      'little',
  'Little', 'LITTLE',
  'lamb'
]
> var k = ['sky', 'is', 'blue']
undefined
> typeof(k)
'object'
> k.join('-')
'sky-is-blue'
>
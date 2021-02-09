Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var L = ['red', 'green', 'blue']
undefined
> L
[ 'red', 'green', 'blue' ]
> typeof(L)
'object'
>
> // -------------------------------- Adding elements
undefined
> L
[ 'red', 'green', 'blue' ]
> L.push('yellow')
4
> L
[ 'red', 'green', 'blue', 'yellow' ]
> L.push('golden')
5
> L
[ 'red', 'green', 'blue', 'yellow', 'golden' ]
> L.shift('orange')
'red'
> L.shift('maroon')
'green'
> L
[ 'blue', 'yellow', 'golden' ]
> L.unshift('maroon')
4
> L.unshift('orange')
5
> L
[ 'orange', 'maroon', 'blue', 'yellow', 'golden' ]
>
> L
[ 'orange', 'maroon', 'blue', 'yellow', 'golden' ]
> L.splice(2, 0, 'red')
[]
> L
[ 'orange', 'maroon', 'red', 'blue', 'yellow', 'golden' ]
> L.splice(4, 0, 'green')
[]
> L
[
  'orange', 'maroon',
  'red',    'blue',
  'green',  'yellow',
  'golden'
]
> // --------------------------------------- remove elements
undefined
>
> l
Thrown:
ReferenceError: l is not defined
> L
[
  'orange', 'maroon',
  'red',    'blue',
  'green',  'yellow',
  'golden'
]
> L.pop()
'golden'
> L
[ 'orange', 'maroon', 'red', 'blue', 'green', 'yellow' ]
> L.shift()
'orange'
> L
[ 'maroon', 'red', 'blue', 'green', 'yellow' ]
>
> L.splice(2, 1)
[ 'blue' ]
> L
[ 'maroon', 'red', 'green', 'yellow' ]
> L.splice(3, 1, 'golden')
[ 'yellow' ]
> L
[ 'maroon', 'red', 'green', 'golden' ]
> L.splice(1, 3, ['white', 'grey', 'black'])
[ 'red', 'green', 'golden' ]
> L
[ 'maroon', [ 'white', 'grey', 'black' ] ]
> L = [ 'maroon', 'red', 'green', 'yellow' ]
[ 'maroon', 'red', 'green', 'yellow' ]
> L.splice(3, 1, 'white', 'grey', 'black')
[ 'yellow' ]
'golden'
> L
[ 'orange', 'maroon', 'red', 'blue', 'green', 'yellow' ]
> L.shift()
'orange'
> L
[ 'maroon', 'red', 'blue', 'green', 'yellow' ]
>
> L.splice(2, 1)
[ 'blue' ]
> L
[ 'maroon', 'red', 'green', 'yellow' ]
> L.splice(3, 1, 'golden')
[ 'yellow' ]
> L
[ 'maroon', 'red', 'green', 'golden' ]
> L.splice(1, 3, ['white', 'grey', 'black'])
[ 'red', 'green', 'golden' ]
> L
[ 'maroon', [ 'white', 'grey', 'black' ] ]
> L = [ 'maroon', 'red', 'green', 'yellow' ]
[ 'maroon', 'red', 'green', 'yellow' ]
> L.splice(3, 1, 'white', 'grey', 'black')
[ 'yellow' ]
[ 'maroon', 'red', 'green', 'white', 'grey', 'black' ]
>
> // ------------------------------------------------  searching
undefined
>
> L
[ 'maroon', 'red', 'green', 'white', 'grey', 'black' ]
> L.indexOf('green')
2
> var x = L.find(e => e == 'white')
undefined
> x
'white'
> // function(e){ return e == 'white'; } ES5
undefined
>
> L.findIndex(e => e == 'white')
3
> L.filter(e => e == 'white')
[ 'white' ]
> L.splice(1, 0, 'white')
[]
> L
[
  'maroon', 'white',
  'red',    'green',
  'white',  'grey',
  'black'
]
> L.filter(e => e == 'white')
[ 'white', 'white' ]
> L.findIndex(e => e == 'white')
1
> var x = L.find(e => e == 'white')
undefined
> x
'white'
> L.includes('white')
true
>
> // -------------------------------------- rearranging elements
undefined
>
> L
[
  'maroon', 'white',
  'red',    'green',
  'white',  'grey',
  'black'
]
> L.sort()
[
  'black', 'green',
  'grey',  'maroon',
  'red',   'white',
  'white'
]
> L.reverse()
[
  'white', 'white',
  'red',   'maroon',
  'grey',  'green',
  'black'
]
>
> L = [10, 3, 4, 1, 67, 100]
[ 10, 3, 4, 1, 67, 100 ]
> L.sort()
[ 1, 10, 100, 3, 4, 67 ]
> L.sort(function(a, b){ return (a - b); })
[ 1, 3, 4, 10, 67, 100 ]
> L.sort((a,b) => (a-b))
[ 1, 3, 4, 10, 67, 100 ]
>
>
> // ---------------------------------------- iterate
undefined
>
> for(item of L) { console.log(item.toUpperCase()); }
Thrown:
TypeError: item.toUpperCase is not a function
>
> L
[ 1, 3, 4, 10, 67, 100 ]
> L = [ 'maroon', 'red', 'green', 'white', 'grey', 'black' ]
[ 'maroon', 'red', 'green', 'white', 'grey', 'black' ]
> L
[ 'maroon', 'red', 'green', 'white', 'grey', 'black' ]
> for(item of L) { console.log(item.toUpperCase()); }
MAROON
RED
GREEN
WHITE
GREY
BLACK
undefined
>
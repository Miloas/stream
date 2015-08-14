## Stream

Stream still a dirty hack toy, inspired by <sicp>.
It implemented a lazy seq, and some method for it, like map , filter ...

## Power

```javascript
/* 
It's easy to build a infinite length fib :
[0,1,1,2,3,5,8...]
*/

function fibgen(a,b){
    return cons_stream(a, function () {
        return fibgen(b,a+b);
    });
}
var fibs = fibgen(0,1);

console.log(take(fibs,10));

=> [0,1,1,2,3,5,8,13,21,34]

```

## Still constructing.

I will rebuild all code. :)

var empty_stream = 'undefined';

function cons_stream(head,tailPromise) {
    return [head,tailPromise];
}

function car_stream(stream) {
    return stream[0];
}

function cdr_stream(stream) {
    return stream[1]();
}

function stream_enumerate_interval(low,high) {
   if(low>high) {
       return empty_stream;
   }else{
       return cons_stream(low,function(){
           return stream_enumerate_interval(low+1,high);
       });
   }
}

function stream_null(stream) {
   return stream==empty_stream
}

function stream_filter(pred,stream) {
    if(stream_null(stream))return empty_stream;
    if(pred(car_stream(stream)))return cons_stream(car_stream(stream),function() {
        return stream_filter(pred, cdr_stream(stream));
    });
    return stream_filter(pred,cdr_stream(stream));
}

function stream_ref(stream,n) {
    if(n==0)return car_stream((stream));
    return stream_ref(cdr_stream(stream),n-1);
}

function stream_map(proc,stream) {
   if(stream_null(stream)){
       return empty_stream;
   }else{
       return cons_stream(proc(car_stream(stream)),function(){
           return stream_map(proc,cdr_stream(stream));
       });
   }
}

function stream_for_each(proc,stream) {
    if(!stream_null(stream)){
        proc(car_stream(stream));
        stream_for_each(proc,cdr_stream(stream));
    }
}

function display_stream(stream) {
    stream_for_each(console.log,stream);
}

function take(stream,n){
    var ret=[];
    while(n--){
        ret.push(car_stream(stream));
        stream=cdr_stream(stream);
    }
    return ret;
}

/* infinite seqences
function fibgen(a,b){
    return cons_stream(a, function () {
        return fibgen(b,a+b);
    });
}

var fibs = fibgen(0,1);
*/



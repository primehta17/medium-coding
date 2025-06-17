function foo(obj){
    let p=[];let q=[];
    for(let val of obj){
        p.push(val.status);
    }
    for(let a of p){
        if(a==true){
            q.push('1');
        }else  if(a==false){
            q.push('0');
        }else{
            q.push('invalid');
        }
    }
    return q;
}
let obj=[
     {"name":"b","status":false},
    {"name":"a","status":true},
    {"name":"b","status":false},
     {"name":"b","status":"abc"}
]
console.log(foo(obj));
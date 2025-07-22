
const a=[10,15,20,25,30,40];
const b=[30,4,16,15];

let sizeA = a.length;
let sizeB = b.length;

const m={};

for(let i=0;i<sizeB;i++){
   
    m[b[i]]=1;
   
}

for(let i=0;i<sizeA;i++){
    if(m[a[i]] == 1){
         console.log(a[i]);
    }
}

function delay(val){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log(val);
            resolve();
        },1000);
    }
     )
}


async function print(){
    for(let i=1;i<=5;i++){
       await delay(i);
    }
}
print();


//printing in 1-1 seconds
// 1
// 2
// 3
// 4
// 5
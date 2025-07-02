function promiserace(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('A');
        },1000);
    })
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('B');
        },2000);
    })
     let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('C');
        },3000);
    })
     Promise.race([promise1, promise2, promise3])
        .then((result) => {
            console.log(" Resolved:", result);
        })
        .catch((error) => {
            // console.log("Promise.race Error:", error);
        });


    promise1.then((res)=>console.log("Promise 1", res))
            .catch((e)=>console.log("Promise 1 Reject:",e));
    promise2.then((res)=>console.log("Promise 2", res))
            .catch((e)=>console.log("Promise 2 Reject:",e));
    promise3.then((res)=>console.log("Promise 3", res))
            .catch((e)=>console.log("Promise 3 Reject:",e));

    // Promise 1 Reject: A
    // Promise 2 Reject: B
    // Promise 3 C

}
promiserace();

// Promise.race Error: A


// 🧠 Behavior of Promise.race():
// Returns a promise that settles (resolves or rejects) as soon as the first input promise settles.

// It doesn’t wait for the others.

// It adopts the state (fulfilled or rejected) of the first-settled promise.
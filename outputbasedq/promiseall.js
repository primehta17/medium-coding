function promiseal(){
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
     Promise.all([promise1, promise2, promise3])
        .then((result) => {
            console.log("All Resolved:", result);
        })
        .catch((error) => {
            console.log("Promise.all Error:", error);
        });


    promise1.then((res)=>console.log("Promise 1", res))
            .catch((e)=>console.log("Promise 1 Reject:",e));
    promise2.then((res)=>console.log("Promise 2", res))
            .catch((e)=>console.log("Promise 2 Reject:",e));
    promise3.then((res)=>console.log("Promise 3", res))
            .catch((e)=>console.log("Promise 3 Reject:",e));

}
promiseal();


// 🧠 Behavior of Promise.all():
// Promise.all waits for all promises to resolve.

// If even one rejects, it immediately rejects with that error, and does not wait for others.

// In your case:

// promise1 rejects after 1s → Promise.all immediately goes to .catch()

// Other promises will still run independently (you can still see their results in individual .then/.catch)
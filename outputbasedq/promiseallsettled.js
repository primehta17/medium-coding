function promiseallset(){
       let promise1= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("A");
        },1000);
    });
      let promise2= new Promise((resolve, reject)=>{
          setTimeout(()=>{
            reject("B");
        },2000);
    });
        let promise3= new Promise((resolve, reject)=>{
           setTimeout(()=>{
            resolve("C");
        },3000);
    });

    Promise.allSettled([promise1,promise2,promise3])
    .then((result)=>{
         console.log(result);
    })

    .catch((error)=>{
        console.log(error);
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
promiseallset();

// [
//   { status: 'rejected', reason: 'A' },
//   { status: 'rejected', reason: 'B' },
//   { status: 'fulfilled', value: 'C' }
// ]


// 🧠 Behavior of Promise.allSettled():
// It waits for all promises to settle (either fulfilled or rejected).

// Then returns an array of results for each promise, with { status: "fulfilled", value: ... } or { status: "rejected", reason: ... }.

// It never short-circuits — all promises complete.
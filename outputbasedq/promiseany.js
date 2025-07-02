function workdone(){
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

    Promise.any([promise1,promise2,promise3])
    .then((result)=>{
        console.log(result)
    })

    .catch((error)=>{
        console.log(error)
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
workdone();

//C






// 🧠 Behavior of Promise.any():
// Promise.any waits for any one promise to resolve.

// As soon as one promise fulfills, it resolves immediately with that value.

// If all promises reject, it goes to .catch() with an AggregateError.

// 🧪 In your case:
// promise1 rejects after 1s

// promise2 rejects after 2s

// promise3 resolves after 3s

// ✅ Since promise3 eventually resolves,
// → Promise.any will resolve after 3s with its value.

// ❗ Even though promise1 and promise2 reject, Promise.any ignores them as soon as one fulfills.
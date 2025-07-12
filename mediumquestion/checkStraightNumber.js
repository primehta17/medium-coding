function checkStraightNumber(n) {
    let sub=0;
    for(let i=1;i<n.length;i++){
     sub=n[i]-n[i-1];
    }
     return sub;
}
console.log(checkStraightNumber('2468'))

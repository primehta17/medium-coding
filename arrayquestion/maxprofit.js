function maxProfit(arr){
    let minProfit= arr[0];
    let maxProfit= 0;
    for(let i=1;i<arr.length;i++){
        minProfit = Math.min(minProfit,arr[i]);
        let currentProfit= arr[i]-minProfit;
        // console.log(currentProfit)
        maxProfit = Math.max(currentProfit,maxProfit);
    }
    return maxProfit;

}
console.log(maxProfit([7,1,5,3,6,4]))
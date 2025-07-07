function checkProgress(weights) {
    for(let i=0;i<weights.length;i++){
        if(weights[i]<weights[i+1] && weights[i+1]<weights[i+2] ){
            return "Making Progress";
        }else{
            return "Work Harder";
        }
    }

}
console.log(checkProgress([50,60,70,90]));
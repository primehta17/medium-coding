function calculateColorDifference(color1, color2) {
    let result=1;
    for(let i=0;i<color1.length;i++){
    //   result+= Math.pow(color1[i]-color2[i],2);
     let power=color1[i]-color2[i];
      result+= power*power

    }
    return Math.sqrt(result);
}
console.log(calculateColorDifference([255,255,255],[0,0,0]))
function convertToTitleCase(str) {
   return str
   .toLowerCase()
   .split(' ')
   .map(word=>word.charAt(0)
   .toUpperCase() + word.slice(1))
   .join(' ');
}
console.log(convertToTitleCase("learn with program"));

function converttotitle(str){
    let arr = str.toLowerCase().split(' ');
    for(let i=0;i<arr.length;i++){
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
return arr.join(' ');
}
console.log(converttotitle("learn the code"))
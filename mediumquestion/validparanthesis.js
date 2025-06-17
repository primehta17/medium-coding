function validparenthesis(arr){
   let slack=[];
   let pairs={
    ')':'(',
    '}':'{',
    ']':'['
   }
   for(let i=0;i<arr.length;i++){
        if(arr[i] =='(' || arr[i] == '[' || arr[i] == '{'){
            slack.push(arr[i]);
        }else if(arr[i] ==')' || arr[i] == ']' || arr[i] == '}'){
            if(slack.length===0 || slack.pop() !=pairs[arr[i]]){
                return false;
            }
        }
   }
   return slack.length===0;
}
console.log(validparenthesis('[[{{}]]]'));
function lowhighlocation(arr,target){
    let low=0,high=arr.length-1;
    let findex=-1,lindex=-1;
        while(low<=high){
              let mid= Math.floor((low+high)/2);
             if(arr[mid]==target){
                 findex=mid;
                 high=mid-1;
             }else if(arr[mid]<target){
                low=mid+1;
             }else{
                high=mid-1;
             }
            }
        low=0,high=arr.length-1;
        while(low<=high){
            let mid= Math.floor((low+high)/2);
              if(arr[mid]==target) {                                          
                 lindex=mid;
                 low=mid+1;
              } else if(arr[mid]<target){
                 low=mid+1;
              }else{
                high=mid-1;
              }
        }  
         return [findex,lindex];
    }
console.log(lowhighlocation([2,4,5,5,7,9],5));
console.log(lowhighlocation([2,4,5,5,7,9],9));
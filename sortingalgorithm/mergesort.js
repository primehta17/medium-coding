function mergesort(arr,start,end){
    if(start>=end) return;
    let mid=Math.floor((start+end)/2);
    mergesort(arr,start,mid);
    mergesort(arr,mid+1,end);
    merge(arr,start,mid,end);
}

function merge(arr,start,mid,end){
    let left =[];
    let right = [];

    for(let i=start;i<=mid;i++){
        left.push(arr[i]);
    }
    for(let i=mid+1;i<=end;i++){
        right.push(arr[i]);
    }

    let i=0, j=0,k=start;
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            arr[k++] = left[i++];
        }else{
            arr[k++] = right[j++];
        }
    }

    while(i<left.length){
        arr[k++] = left[i++];
    }

    while(j<right.length){
        arr[k++] = right[j++];
    }

}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergesort(arr,0,arr.length-1);
console.log(arr);
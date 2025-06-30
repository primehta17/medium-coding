function findBoomerangs(nums) {
   let newarr=[];
   for(let i=0;i<nums.length;i++){
      if(nums[i]===nums[i+2] && nums[i]!==nums[i+1]){
        let trio =[];
        trio[0]= nums[i];
        trio[1]=nums[i+1];
        trio[2]=nums[i+2];
        newarr.push(trio);
      }
   }
   return newarr;
}
console.log(findBoomerangs([3,7,3,2,1,5,1,2,2,-2,2]));
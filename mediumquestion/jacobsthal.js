function jacobsthal(n) {
    if(n==0){
        return 0;
    }
      if(n==1){
        return 1;
    }
    return jacobsthal(n-1) + 2* jacobsthal(n-2);
}
console.log(jacobsthal(6))
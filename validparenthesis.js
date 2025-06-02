function validParenthesis(expression){
  let stack=[];
  let pairs={
    ')':'(',
    '}':'{',
    ']':'['
  };

  for(let i=0;i<expression.length;i++){
    const char = expression[i];


    //check for opening brackets
    if(char === '(' || char === '{' || char === '['){
        stack.push(char);
        // console.log(stack);
    }

    //check for closing brackets
    else if(char === ')' || char === '}' || char === "]"){
        if(stack.length === 0 || stack.pop() !== pairs[char]){
            // console.log(stack);
            return false;
        }
    }
  }
  return stack.length===0;
}

// Example usage:
console.log(validParenthesis("{[()]}")); // Output: true
console.log(validParenthesis("{[(])}")); // Output: false
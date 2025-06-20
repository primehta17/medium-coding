function findTrueEquations(equations) {
     return equations.filter((equation) => {
        return eval(equation.replace('=', '==='));
    })
}
let arr=['10+10=20', '5*5=25', '30-15=15'];
console.log(findTrueEquations(arr));
let arr2=['2+2=4', '3*3=6', '1+1=3', '5/5=1'];
console.log(findTrueEquations(arr2));
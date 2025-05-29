function firstrepeatchar(str){
    let seen={};
    for(let i=0;i<str.length;i++){
        let abc=str[i];
        if(seen[abc] !== undefined){
            return abc;
        }
        else
        {
        seen[abc] = true;
        }
    }
    return null;
}
console.log(firstrepeatchar("giieeksofoeek"))
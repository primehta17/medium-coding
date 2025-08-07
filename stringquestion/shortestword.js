function findShortestWord(str) {
    let words=str.split(' ').filter(Boolean);
   if(!words.length) return '';
    let shortest = words[0];
    for(let i=0;i<words.length;i++){
      const word= words[i];
        if(word.length<shortest.length){
           shortest = word;
        }
    }
    return shortest;
}
console.log(findShortestWord("I love Programming"))
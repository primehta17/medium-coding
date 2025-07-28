function jazzify(chords) {
    let newchord=[];
    let last = chords.length-1;
  
    for(let i=0;i<chords.length;i++){
         let chord=chords[i];
         let last=chord[chord.length-1]
        if(last=="7"){
             newchord.push(chords[i]);
        }else{
              newchord.push(chords[i]+"7")
        }
       
    }
     return newchord;
}
console.log(jazzify(["C","K7","G"]))
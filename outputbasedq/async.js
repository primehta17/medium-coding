async function abc(){
  await console.log('1');
  console.log('2');
}
abc();
 console.log('3');

// 1  //first await console.
// 3  // then cosole.log
// 2   // then async console.log
//Predict 1
for(var num = 0; num < 15; num++){
  console.log(num);
}
// //starting at number 0 and ending at number 14, add 1 after each number. 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


//Predict 2
for(var i = 1; i < 10; i+=2){
  if(i % 3 ==0){
    console.log(i);
  }
}
// starting at number 1 and ending at number 9, add 2 after each number and only include all numbers that are multiples of 3
// 3
// 9

//Predict 3
 for(var j = 1; j <= 15; j++){
  if(j % 2 ==0){
    j+=2;
  }
  else if(j % 3 ==0){
    j++;
  }
  console.log(j);
}
//starting at number 1 and ending at number 15, add 1 after each number
//if the number is a multiple of 2, add 2 to that number (and display on console log)
//if the number is a multiple of 3, add 3 to that number (and display on console log)\
// 1
// 4
// 5
// 8
// 10
// 11
// 14
// 16
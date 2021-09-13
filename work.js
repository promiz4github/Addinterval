let counter = 0;

const myCount = () => {
  console.log(counter + 1)
  counter += 1;
   //
   // if( counter === 40){
   //    clearInterval();
   // }
}
 console.log(setInterval(myCount, 1000))

// const result = setImmediate(myCount, 1000);
// console.log(result)

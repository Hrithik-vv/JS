// let a = 1;
// while (a <= 10) {
//     console.log(a);
//     a++;
// }


// let a =10
// while(a>=1){
//     console.log(a)
//     a--
// }



// for(let i=1; i<=50; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }


// for(let i=1; i<=50; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// let sum =0
// for(let i=1; i<=50; i++){
//     if(i % 2 !== 0){
//         sum =sum+i
//     }
// }
// console.log(sum)


// let sum =0
// for(let i=1; i<=50; i++){
//     if(i % 2 == 0){
//         sum =sum+i
//     }
// }
// console.log(sum)


// let a = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(i + "*" + a + "=" + i * a);
// }



// let count=0
// for(let i=1; i<=100; i++){
//     if(i%3==0){
//         count++
//     }
// }
// console.log(count);


// for(let i=1; i<=20; i++){
//     console.log(i*i)
// }



// for (let i=1; i<=10; i++){
//     console.log(i*i*i);
    
// }



// let a = 4;
// for (let i = 1; i <= 10; i++) {
//   console.log(i*4);
  
// }



// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + (i * i);
// }
// console.log(sum);


// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + (i * i *i);
// }
// console.log(sum);



// for(let i=1; i<=100; i++){
//     if(i % 3==0 && i%5==0){
//         console.log(i)
//     }
// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }


// let num = 6;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }

// console.log(fact);


// for(let num =2; num <=50; num++){
//     let isprime=true

//     for(let i=2; i<num; i++){
//         if(num %  i ===0){
//             isprime=false
//             break;
//         }
//     }
//     if(isprime){
//       console.log(num);
      
//     }
// }



// let num =2
// let isprime=true

// if(num <=2){
//     isprime=false
// }else{
//     for(let i=2; i<num; i++){
//         if(num % i ==0){
//             isprime=false
//             break
//         }
//     }
// }
// if(isprime){
//     console.log("this is prime");
// }else{
//     console.log("not prime");
    
// }








// -----------------------------------------------


// function check(num){
//     if(num % 2==0){
//         console.log("even")
//     }else{
//         console.log("odd");
        
//     }
// }
// check(2)




// function factorial(num){
//     let fact=1
//     for(let i=1; i<=num; i++){
//        fact *=i
//     }
//     console.log(fact);
    
// }
// factorial(6)



// function find(num) {
//     let sum=0
//     for(let i=1; i<=num; i++){
//         sum =sum+i
//     }
//     console.log(sum);
    
// }
// find(10)



// function find(num){
//     let sum =(num*(num+1))/2
//     console.log(sum)
// }
// find(5)


// function isprime(num){
//     if(num <=1){
//         return false
//     }
//     for(let i=2; i<num; i++){
//         if(num % i ==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isprime(7));



// function check(num){
//     if (num<0)return false
//     const str =num.toString()

//     const reverse =str.split('').reverse().join('')
//     return str === reverse;
// }
// console.log(check(212));


// function rev(str){
//     return str.split('').reverse().join('')
// }
// console.log(rev("hello"));






// function check(str){
//   const vowels =['a','e','i','o','u'] 
//   let count=0 

//   str=str.toLowerCase();

//   for(let i=0; i<str.length; i++){
//     if(vowels.includes(str[i])){
//         count++
//     }
//   }
//   return count
// }
// console.log(check("hello"));



// function space(str){
//     let result=""

//     for(let i=0; i< str.length; i++){
//         if(str[i] !==" "){
//             result +=str[i]
//         }
//     }
//     return
// }
// console.log(space("ha jsh"));



// function long(str){
//     const word =str.split(" ")

//     let longest =""

//     for(let i=0; i<word.length; i++){
//         if(word[i].length > longest.length){
//             longest =word[i]
//         }
//     }
//     return longest
// }
// console.log(long( "dcds sd ddddd"));




// function count (str){
//     const word =str.trim().split(/\s+/)

//     if(str.trim()=== "")return 0
//     return word.length;
// }
// console.log(count("hgg gyugut"));






// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += "* ";
//     }
//     console.log(line);
// }



// for(let i=1; i<=5; i++){
//     let line =""
//     for(let j=1; j<=5; j++){
//         line +="* "
//     }
//     console.log(line);
    
// }


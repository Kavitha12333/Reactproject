// // for loop
// for( var a=0; a<5; a++) {
// document.write(a +"." + "hello" +"<br>")

// }
// for(a=0; a<=10; a++){
//     document.write(a + "<br>") 
// }
// for(a=10; a>=1; a--){
//     document.write(a +")"+ "." + "this is my statement"+"<br>") 
// }
// //  while loop
// let x =0;
// while(x<=20){
//     document.write(x + "this is while condition"+"<br>")
//     x++
// }
// var b=20;
// while(b>=10){
//     document.write(b +"kkkkkkkkkkkkkkk"+"<br>")
//     b--
// }
let loop = 10
do{
    document.write(loop + "this is do while condition" +"<br>")
    loop++
}
while(loop <=20)
let a =10;
while(a>=1){
    document.write(a+"<br>") 
    a--
}
for(i=15; i>=10; i--){
    document.write(i+"<br>")
}
// for(i=0; i<=20; i=i+2){
//     document.write(i)
// }
// var i =2
// while(i<=10){
//     document.write(i+"<br>")
//     i=i+2
// }
// for(i=1; i<=10; i=i+2){
//     document.write(i)
// }
let count = 1;
let num = 4;

console.log("The first ten multiples of 4 are:");

while (count <= 10) {
    document.write(num * count+"<br>")
    count++;
 }
// armstrong numbers
0,1,153,370,371,407

let x=1
let sum=0;
let temp=x
while(temp>0){
    y=temp%10
    sum +=y**3
    temp=parseInt(temp/10)
}
document.write(x,sum)
if(x==sum){
    document.write("yes this is armstrong number")
}
else{
    document.write("not armstrong num")
}

// fibonacci number series
// var n1=0,n2=1,next,i;
// for(i=1; i<=8; i++){
//     document.write(n1+"<br>")
//     next=n1
//     next=n1+n2;
//     n1=n2;
//     n2=next;
// }
// factorial
var number =3;
var fact =1;
for(i=number; i>1; i--){
    fact = fact *i;
    // document.write(fact);
 }
 document.write(fact+"<br>");

var number=4;
var fact=1;
i=number;
while(i>1){
    fact = fact*i
    // document.write(fact)
    i--
}document.write(fact+"<br>")
// var i=1;
// while(i<=24){
//     if(24%i===0){
//         document.write(i)
//     }
//     i=i+1
// }
var number=1245
var reverse=0;
document.write("original number:"+number)
while(number!=0){
    reverse =(reverse*10)+(number%10);
    number =parseInt(number/10)
}
document.write("reverse number:"+reverse)
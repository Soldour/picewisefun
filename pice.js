let x
let a= require("readline-sync");
x = a.questionFloat("Enter value of X: ")
console.log("pice wise");

while(x>=-10&& x<=10){

    let y
if (x>=-2 && x<=2){
    y=(x**2);
     console.log(`Apply f(x)= x**2`)
} else if((x>=-5&&x<-2)||(x>2&&x<=5)){
    y =Math.sin(x);
    console.log(`Apply f(x)=syn x`)
}else{
    y= Math.abs(x);
    console.log(`Apply f(x)= x`)
}
console.log(`y:`, y);
console.log(x)
x +=0.5
}

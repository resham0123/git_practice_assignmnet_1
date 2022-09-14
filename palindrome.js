let num=172;
let rev=0;
let temp=num;
while(N>0){
rem=num%10;
rev=rev*10+rem;
num=Math.floor(num/10)
}
if(temp==rev){
console.log("Yes");
}else{
console.log("No");
}

let num=N;
let rev=0;
let temp=num;
let rem=0;
while(N>0){
rem=num%10;
rev=rev*10+rem;
num=Math.floor(num/10)
}
if(temp==rev){
console.log("No");
}else{
console.log("Yes");
}

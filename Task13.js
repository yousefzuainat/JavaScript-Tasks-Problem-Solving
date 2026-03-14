let num=1;
let r='';
for (let i = 1; i <= 100; i++) {
   if (i%7==0){
    r+=i+" ";
    continue;
   }
}
console.log(r);

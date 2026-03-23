// 112 => 1=1 
//122 => 2=2
let  num1 =0 ;
let num2 =0;
let num3=0;
for (let i = 1; i < 300; i++) //122
    {
    let num1 = i%10; // 2
    let num2 = Math.floor(i/10)%10; // 2
    let num3 = Math.floor(i/100)%10; // 1
    if (num1==num2 || num1==num3 || num2==num3)
    {
        console.log(i);
    }



}
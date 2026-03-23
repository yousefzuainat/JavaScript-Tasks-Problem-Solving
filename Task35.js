let num1 = 0 ;
let num2 = 0 ; 
for (let i = 1; i < 100; i++)
    {
    let num1 = i%10;
    let num2 = Math.floor(i/10)%10;
    if ((num1*num2)%5==0)
    {
        console.log(i);
    }


}
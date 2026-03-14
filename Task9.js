let r = '' ;
for (let counter =0 , prev =0 , current=1 ; counter <10 ; ++ counter){
    r += prev + " " ;
    next = prev + current;
    prev = current;
    current = next;
}
console.log(r);

//prev bast number
//current current number
//next next number
/* 
الرقم التالي = مجموع الرقمين السابقين
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
*/

//Pre Increment ++counter زد القيمة أولاً ثم استخدمها.

/*

    let prev = 0;
    let current = 1;

    for (let i = 0; i < 10; i++) {
        console.log(prev);

        let next = prev + current;
        prev = current;
        current = next;
    }

*/
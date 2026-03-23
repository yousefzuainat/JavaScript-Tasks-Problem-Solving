//13 → Reverse 31

for (let i = 1; i <= 100; i++) {
    let temp = i;
    let reversed = 0;

    while (temp > 0) {
        let digit = temp % 10; //3
        reversed = reversed * 10 + digit;//3
        temp = Math.floor(temp / 10);//1
    }

    if (i < reversed) {
        console.log(`${i} => Reverse ${reversed}`);
    }
}
